/** @format */

import React from "react";
import CluelessContent from "./cluelessContent";
import Image from "next/image";
import { BGtv } from "@/app/images/collaboration";

const collabBottom = () => {
  return (
    <div className="mb-10 collab-bottom flex w-full h-full justify-center items-center relative">
      <Image src={BGtv} alt="collab" objectFit="cover" objectPosition="center" className="absolute w-full h-full" />
      <CluelessContent />
    </div>
  );
};

export default collabBottom;
