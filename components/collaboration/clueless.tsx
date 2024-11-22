/** @format */

import React from "react";
import { CluelessContainer, CluelessContent, CluelessFooter, CluelessNav } from ".";

const clueless = () => {
  return (
    <div className="clueless-container w-full h-full z-20">
      <CluelessNav />
      <CluelessContainer />
      <CluelessFooter />
    </div>
  );
};

export default clueless;
