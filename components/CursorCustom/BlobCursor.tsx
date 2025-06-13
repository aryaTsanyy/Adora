/** @format */

"use client";

import React, { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

export interface BlobCursorProps {
  blobType?: "circle" | "square";
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  mixBlendMode?: string;
  zIndex?: number;
}

export default function BlobCursor({
  blobType = "circle",
  fillColor = "rgba(30,30,40,0.45)",
  trailCount = 3,
  sizes = [16, 22, 28],
  innerSizes = [4, 7, 10],
  innerColor = "rgba(180,255,255,0.7)",
  opacities = [0.8, 0.8, 0.8],
  shadowColor = "rgba(80,120,255,0.35)",
  shadowBlur = 18,
  shadowOffsetX = 0,
  shadowOffsetY = 0,
  filterId = "blob",
  filterStdDeviation = 10,
  filterColorMatrixValues = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -5",
  useFilter = true,
  fastDuration = 0.13,
  mixBlendMode = "exclusion",
  slowDuration = 0.33,
  fastEase = "power3.out",
  slowEase = "power1.out",
  zIndex = 100,
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Fallback untuk NaN bug
  const getSize = (arr: number[], i: number, fallback: number) => arr[i] ?? arr[0] ?? fallback;

  // Gunakan event global agar cursor selalu muncul
  useEffect(() => {
    const updateOffset = () => {
      if (!containerRef.current) return { left: 0, top: 0 };
      const rect = containerRef.current.getBoundingClientRect();
      return { left: rect.left, top: rect.top };
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const { left, top } = updateOffset();
      let x = 0,
        y = 0;
      if ("touches" in e) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        x = e.clientX;
        y = e.clientY;
      }
      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase,
        });
      });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [fastDuration, slowDuration, fastEase, slowEase]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: zIndex ?? 100,
      }}
      className="blobCursor"
    >
      {useFilter && (
        <svg className="absolute w-0 h-0">
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none cursor-default z-50" style={{ filter: useFilter ? `url(#${filterId})` : undefined }}>
        {Array.from({ length: trailCount }).map((_, i) => {
          const size = getSize(sizes, i, 24);
          const innerSize = getSize(innerSizes, i, 8);
          return (
            <div
              key={i}
              ref={(el) => {
                blobsRef.current[i] = el;
              }}
              className="absolute will-change-transform transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: size,
                height: size,
                borderRadius: blobType === "circle" ? "50%" : "0",
                backgroundColor: fillColor,
                opacity: opacities[i] ?? 0.3,
                boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`,
              }}
            >
              <div
                className="absolute"
                style={{
                  width: innerSize,
                  height: innerSize,
                  top: (size - innerSize) / 2,
                  left: (size - innerSize) / 2,
                  backgroundColor: innerColor,
                  borderRadius: blobType === "circle" ? "50%" : "0",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
