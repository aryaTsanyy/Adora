/** @format */

import Image from "next/image";
import * as heroImages from "../app/images/herosection";

const hero = () => {
  return (
    <div className="hero-section relative pt-24 pb-14 items-center justify-center">
      <div className="hero-container w-full relative flex-col items-center justify-center">
        <Image src={heroImages.Bebold} alt="Bebold" width={110} height={49} className="bebold absolute" />
        <Image src={heroImages.Bold} alt="boldsvg" width={145} height={54} className="bold absolute" />
        <div className="hero-text absolute w-full ">
          <h1 className="text-center">adora.</h1>
        </div>
        <div className="frame-heroimg justify-center relative z-10 flex w-full items-center pt-32 ">
          <div className="frame-responsive w-full flex relative items-center justify-start -space-x-28 mx-56 ">
            <Image src={heroImages.heroIMG2} alt="Muse1" loading="lazy" width={500} height={680} objectFit="cover" objectPosition="center" className="object-cover object-center" />
            <Image src={heroImages.heroIMG1} alt="Muse2" loading="lazy" width={500} height={680} objectFit="cover" objectPosition="center" className="object-cover object-center" />
            <Image src={heroImages.heroIMG3} alt="Muse3" loading="lazy" width={500} height={680} objectFit="cover" objectPosition="center" className="object-cover object-center" />
            <Image src={heroImages.heroIMG4} alt="Muse4" loading="lazy" width={500} height={680} objectFit="cover" objectPosition="center" className="z-10 object-cover object-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
