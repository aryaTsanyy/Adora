/** @format */
"use client";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { Hero } from "@/components";
import { Navigationbar } from "@/components";
import { Categorycard, CategoryGrid } from "@/components/category";
import { Clueless, CollabBottom, Collabtop } from "@/components/collaboration";
import { DiscountSection } from "@/components/discount";
import { FooterSection } from "@/components/footer";
import { SectionInfinite } from "@/components/infiniteScrollAnimation";
import { Title } from "@/components/newdrop";
import { NewdropContainer } from "@/components/newdrop";
import { Card, TopSecond, Typer } from "@/components/second";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import BlobCursor from "@/components/CursorCustom/BlobCursor";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let smoother: any;
    if (wrapperRef.current && contentRef.current) {
      smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1,
        effects: true,
      });
    }
    return () => {
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-section h1", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
      gsap.fromTo(".hero-section img", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 });
      gsap.fromTo(".collaboration", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
      gsap.fromTo(".new-drop", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
      gsap.fromTo(".category", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
      gsap.fromTo(".discount-section", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
      gsap.fromTo(".footer-section", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
      gsap.fromTo(".collab-bottom", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
      gsap.fromTo(".collab-top", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="smooth-wrapper">
      <BlobCursor />
      <div className="smooth-content">
        <main className="overflow-hidden">
          <Navigationbar />
          <section className="hero-section" data-speed="0.5" data-lag="0.1">
            <Hero />
          </section>
          <section className="second-section h-auto w-full px-10 py-36 flex-col justify-center items-center" data-speed="0.8" data-lag="0.1">
            <TopSecond />
            <Card />
          </section>
          <section className="new-drop h-auto pb-32" data-speed="0.8" data-lag="0.1">
            <Title />
            <NewdropContainer />
          </section>
          <section className="category pb-10" data-speed="0.8" data-lag="0.1">
            <CategoryGrid />
          </section>
          <section className="w-full collaboration h-full p-10 flex flex-col content-center items-center justify-center gap-8" data-speed="0.8" data-lag="0.1">
            <Collabtop />
            <CollabBottom />
          </section>
          <DiscountSection />
          <footer data-speed="0.8">
            <FooterSection />
          </footer>
        </main>
      </div>
    </div>
  );
}
