/** @format */

import React from "react";
import { CluelessContent, CluelessFooter, CluelessNav } from ".";

const clueless = () => {
  return (
    <div className="clueless-container w-full h-full">
      <CluelessNav />
      <CluelessContent />
      <CluelessFooter />
    </div>
  );
};

export default clueless;
