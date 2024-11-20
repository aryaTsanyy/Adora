/** @format */
"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const typer = () => {
  return (
    <div className="second-item relative flex items-center">
      <p className="second-text text-center relative">
        <Typewriter
          words={["Discover Adora’s curated collections that beautifully blend the latest trends with timeless elegance, designed to empower every woman to feel confident and beautiful every day."]}
          loop={true}
          cursor={true}
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={75}
        />
      </p>
    </div>
  );
};

export default typer;
