/** @format */

import React from "react";
import { Typer } from ".";

const topSecond = () => {
  return (
    <div className="topSecond relative mx-24 mb-36 flex flex-col gap-3 items-center justify-center">
      <Typer />
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <g clipPath="url(#clip0_2383_215)">
          <path
            d="M25 43.75C35.3553 43.75 43.75 35.3553 43.75 25C43.75 14.6447 35.3553 6.25 25 6.25C14.6447 6.25 6.25 14.6447 6.25 25C6.25 35.3553 14.6447 43.75 25 43.75Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M17.9688 23.4375C19.2632 23.4375 20.3125 22.3882 20.3125 21.0938C20.3125 19.7993 19.2632 18.75 17.9688 18.75C16.6743 18.75 15.625 19.7993 15.625 21.0938C15.625 22.3882 16.6743 23.4375 17.9688 23.4375Z" fill="black" />
          <path d="M32.0312 23.4375C33.3257 23.4375 34.375 22.3882 34.375 21.0938C34.375 19.7993 33.3257 18.75 32.0312 18.75C30.7368 18.75 29.6875 19.7993 29.6875 21.0938C29.6875 22.3882 30.7368 23.4375 32.0312 23.4375Z" fill="black" />
          <path d="M32.8125 29.6875C31.1914 32.4902 28.4707 34.375 25 34.375C21.5293 34.375 18.8086 32.4902 17.1875 29.6875" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2383_215">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default topSecond;
