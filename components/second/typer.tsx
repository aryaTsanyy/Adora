/** @format */
"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const typer = () => {
  return (
    <div className="second-item relative flex items-center">
      <p className="second-text text-center relative">
        Discover Adora’s curated collections that beautifully blend the latest trends with timeless elegance, designed to empower every woman to feel
        <Typewriter words={[" Confident", " Beautiful"]} loop={true} cursor={true} cursorStyle="|" typeSpeed={200} deleteSpeed={100} delaySpeed={300} />
        every day.
      </p>
    </div>
  );
};

export default typer;
