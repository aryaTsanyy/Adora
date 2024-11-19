/** @format */

import Image from "next/image";
import * as heroImages from "../app/images/herosection";

const hero = () => {
  return (
    <div className="hero-section h-auto relative pt-32 items-center justify-center pb-28">
      <div className="hero-container relative flex-col items-center">
        <Image src={heroImages.Bebold} alt="Bebold" height={49} className="bebold absolute" />
        <Image src={heroImages.Bold} alt="boldsvg" height={54} className="bold absolute" />
        <div className="hero-text absolute w-full ">
          <h1 className="text-center">adora.</h1>
        </div>
        <div className="frame-heroimg relative z-10 flex w-full justify-center pt-56">
          <div className="flex relative">
            <Image src={heroImages.FashionSvg} alt="FashionSvg" className="fashionsvg absolute" height={82} />
            <Image src={heroImages.heroIMG2} alt="Muse1" loading="lazy" width={500} height={680} objectFit="cover" objectPosition="center" className="-mr-60 flex-shrink-0" />
            <Image src={heroImages.heroIMG1} alt="Muse2" loading="lazy" width={500} height={680} objectFit="cover" objectPosition="center" className="-mr-60 flex-shrink-0" />
            <Image src={heroImages.heroIMG3} alt="Muse3" loading="lazy" width={500} height={680} objectFit="cover" objectPosition="center" className="-mr-60 flex-shrink-0" />
            <Image src={heroImages.heroIMG4} alt="Muse4" loading="lazy" width={500} height={680} objectFit="cover" objectPosition="center" className="flex-shrink-0" />
            <Image src={heroImages.Adora} alt="adora" className="adorasvg absolute" height={68} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
