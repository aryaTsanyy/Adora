/** @format */

import React from "react";
import Image from "next/image";
import * as Second from "@/app/images/second";

const card = () => {
  return (
    <div className="flex gap-4">
      {/* <!-- Left Card --> */}
      <div className="card-content relative w-full md:w-1/2 overflow-hidden">
        <Image src={Second.Card1} alt="Left Collection" className="w-full h-full object-cover rounded-md" />
        <div className="absolute h-full inset-0 flex justify-between items-end p-6 rounded-md z-10">
          <div className="card-content-left align-bottom">
            <div className="text-white card-content-top flex items-center">
              <h1 className="title-card pr-4">adora.</h1>
              <span>x</span>
              <Image src={Second.Nwjeans} alt="Nwjeans" width={122} height={50} />
            </div>
            <p className="text-white mt-2 w-4/5">A chic collection inspired by their signature outfits. Embrace effortless style with trendy pieces that reflect the youthful spirit and individuality of NewJeans!</p>
          </div>
          <div className="card-content-right">
            <a href="#" className="arrow-card relative p-3 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="absolute">
                <path
                  d="M16 0.888861V12.4441C16 12.6798 15.9064 12.9059 15.7397 13.0726C15.573 13.2393 15.3469 13.3329 15.1111 13.3329C14.8754 13.3329 14.6493 13.2393 14.4826 13.0726C14.3159 12.9059 14.2223 12.6798 14.2223 12.4441V3.03435L1.51823 15.7395C1.35144 15.9063 1.12523 16 0.889356 16C0.653484 16 0.427273 15.9063 0.260486 15.7395C0.0936996 15.5727 0 15.3465 0 15.1106C0 14.8748 0.0936996 14.6486 0.260486 14.4818L12.9656 1.77772H3.55594C3.3202 1.77772 3.09411 1.68407 2.92742 1.51738C2.76073 1.35069 2.66708 1.1246 2.66708 0.888861C2.66708 0.653121 2.76073 0.427035 2.92742 0.260342C3.09411 0.0936478 3.3202 0 3.55594 0H15.1111C15.3469 0 15.573 0.0936478 15.7397 0.260342C15.9064 0.427035 16 0.653121 16 0.888861Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="card-layer absolute inset-0 w-full h-full"></div>
      </div>
      {/* Right Card */}
      <div className="card-content relative w-full md:w-1/2 overflow-hidden">
        <Image src={Second.Card2} alt="Left Collection" className="w-full h-full object-cover rounded-md" />
        <div className="absolute h-full inset-0 flex justify-between items-end p-6 rounded-md z-10">
          <div className="card-content-left align-bottom">
            <div className="text-white card-content-top flex items-center">
              <h1 className="title-card pr-4">adora.</h1>
              <span>x</span>
              <Image src={Second.Aespa} alt="Aespa" width={122} height={50} />
            </div>
            <p className="text-white mt-2 w-4/5">Introducing adora. x aespa: Bold, playful pieces inspired by aespa's "My Spicy" album. Elevate your look with vibrant styles made to stand out!</p>
          </div>
          <div className="card-content-right">
            <a href="#" className="arrow-card relative p-3 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="absolute">
                <path
                  d="M16 0.888861V12.4441C16 12.6798 15.9064 12.9059 15.7397 13.0726C15.573 13.2393 15.3469 13.3329 15.1111 13.3329C14.8754 13.3329 14.6493 13.2393 14.4826 13.0726C14.3159 12.9059 14.2223 12.6798 14.2223 12.4441V3.03435L1.51823 15.7395C1.35144 15.9063 1.12523 16 0.889356 16C0.653484 16 0.427273 15.9063 0.260486 15.7395C0.0936996 15.5727 0 15.3465 0 15.1106C0 14.8748 0.0936996 14.6486 0.260486 14.4818L12.9656 1.77772H3.55594C3.3202 1.77772 3.09411 1.68407 2.92742 1.51738C2.76073 1.35069 2.66708 1.1246 2.66708 0.888861C2.66708 0.653121 2.76073 0.427035 2.92742 0.260342C3.09411 0.0936478 3.3202 0 3.55594 0H15.1111C15.3469 0 15.573 0.0936478 15.7397 0.260342C15.9064 0.427035 16 0.653121 16 0.888861Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="card-layer absolute inset-0 w-full h-full"></div>
      </div>
    </div>
  );
};

export default card;
