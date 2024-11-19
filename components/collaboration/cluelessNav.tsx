/** @format */

import React from "react";

const cluelessNav = () => {
  return (
    <div className="clueless-nav relative bg-black h-auto w-full p-3">
      <ul className="w-full relative flex items-center justify-between self-stretch">
        <li>CHER'S WARDROBE</li>
        <li className="absolute flex w-full items-center mx-auto">
          <div className="smallBtn mx-auto">FALL'S FASHIONS</div>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default cluelessNav;
