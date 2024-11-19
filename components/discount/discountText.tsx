/** @format */

import React from "react";

const discountText = () => {
  return (
    <div className="discount-content ml-1 my-2 flex flex-col gap-6 items-start justify-center">
      <div className="title flex flex-col text-start">
        <h2>Adora.</h2>
        <h1>Clearance Sale! </h1>
        <h3>Up to 70% OFF!</h3>
      </div>
      <p>Last chance to grab your favorite styles before they’re gone. Shop now and enjoy these great deals!</p>
      <button className="flex items-center justify-center px-8 py-2">Shop Now</button>
    </div>
  );
};

export default discountText;
