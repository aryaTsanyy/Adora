/** @format */

import Image from "next/image";
import * as heroImages from "../app/images/herosection";
import { SectionInfinite } from "@/components/infiniteScrollAnimation";

const hero = () => {
  return (
    <div className="hero-section relative pt-24 h-screen flex flex-col justify-between ">
      <div className="hero-container w-full relative flex-col items-center justify-center">
        <Image src={heroImages.Bebold} alt="Bebold" width={110} height={49} className="bebold absolute" />
        <Image src={heroImages.Bold} alt="boldsvg" width={145} height={54} className="bold absolute" />
        <Image src={heroImages.FashionSvg} alt="FashionSvg" width={189} height={96} className="fashionsvg absolute" />
        <Image src={heroImages.Adora} alt="AdoraSvg" width={154} height={80} className="adorasvg absolute" />
        <div className="hero-text relative w-full text-center">
          <h1
            className="font-black text-black tracking-wider relative z-30"
            style={{
              fontSize: "clamp(180px, 40vw, 380px)",
              fontWeight: "900",
              letterSpacing: "-0.01em",
            }}
          >
            adora.
          </h1>
        </div>
        {/* Models Container */}
        <div className="frame-responsive w-full h-auto flex flex-row relative items-center justify-center mt-[-220px] mb-2 gap-8">
          <Image src={heroImages.heroIMG1} alt="Fashion Model 1" width={480} height={500} loading="lazy" className="z-10 w-auto h-[60vh] max-h-[680px] min-h-[300px] object-cover" />
          <Image src={heroImages.heroIMG2} alt="Fashion Model 1" width={480} height={500} loading="lazy" className="z-10 w-auto h-[60vh] max-h-[680px] min-h-[300px] object-cover" />
          <Image src={heroImages.heroIMG3} alt="Fashion Model 1" width={480} height={500} loading="lazy" className="z-10 w-auto h-[60vh] max-h-[680px] min-h-[300px] object-cover" />
          <Image src={heroImages.heroIMG4} alt="Fashion Model 1" width={480} height={500} loading="lazy" className="z-10 w-auto h-[60vh] max-h-[680px] min-h-[300px] object-cover" />
        </div>
      </div>
      <div className="heroinfinity justify-end items-end bottom-0 h-[calc(80px*(100vw/1280px))] min-h-[40px] max-h-[120px] mb-2">
        <SectionInfinite />
      </div>
    </div>
  );
};

export default hero;
