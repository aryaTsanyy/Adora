/** @format */

import React from "react";
import Image from "next/image";
import * as collabIMG from "@/app/images/collaboration";

const collabtop = () => {
  return (
    <div className="collabcontent flex flex-col items-center justify-center gap-8">
      <div className="collabtitle w-auto flex gap-4 items-center justify-center">
        <h1>adora.</h1>
        <span>x</span>
        <Image src={collabIMG.Clueless} alt="Clueless" width={130} height={50} />
      </div>
      <div className="collab-text flex flex-col items-center justify-center">
        <h1>Cher’s Closet</h1>
        <p>Get ready to create your dream outfits with Cher's Closet! Unlock iconic adora. x Clueless pieces and build your perfect look in Cher's signature style!</p>
      </div>
      <div className="collab-btn">
        <button className="px-8 py-2">Shop Now</button>
      </div>
    </div>
  );
};

export default collabtop;
