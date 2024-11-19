/** @format */

import React from "react";
import * as CollabIMG from "@/app/images/collaboration";
import Image from "next/image";

const cluelessContent = () => {
  return (
    <main className="cluelesscontent">
      <div>
        <div className="bigBtn">BROWSE</div>
        <div id="clothesdiv" className="flex flex-col">
          <div id="topCarousel">
            <div className="carouselContainer items-center">
              <Image src={CollabIMG.top1} alt="" className="carouselImg noDisplay one top" />
              <Image src={CollabIMG.top2} alt="" className="carouselImg noDisplay two" />
              <Image src={CollabIMG.top3} alt="" className="carouselImg noDisplay three" />
              <Image src={CollabIMG.top4} alt="" className="carouselImg four" />
            </div>
          </div>
          <div className="carouselBtnDiv w-full">
            <span className="carouselBtn top prev flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <g filter="url(#filter0_d_2295_236)">
                  <path
                    d="M0.500004 9.00017C0.499479 9.21624 0.554879 9.42877 0.660815 9.61708C0.766751 9.8054 0.919619 9.96309 1.10455 10.0748L12.5655 17.086C12.7587 17.2043 12.98 17.2689 13.2065 17.2731C13.4331 17.2773 13.6566 17.2209 13.8541 17.1098C14.0497 17.0005 14.2126 16.841 14.3261 16.6478C14.4397 16.4546 14.4997 16.2346 14.5 16.0105V1.98983C14.4997 1.76574 14.4397 1.54578 14.3261 1.35257C14.2126 1.15936 14.0497 0.999877 13.8541 0.890516C13.6566 0.77943 13.4331 0.723074 13.2065 0.727269C12.98 0.731464 12.7587 0.796058 12.5655 0.91438L1.10455 7.92551C0.919619 8.03725 0.766751 8.19495 0.660815 8.38326C0.554879 8.57158 0.499479 8.78411 0.500004 9.00017Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter id="filter0_d_2295_236" x="0.5" y="0.727051" width="15" height="17.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_236" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_236" result="shape" />
                  </filter>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <g filter="url(#filter0_d_2295_236)">
                  <path
                    d="M0.500004 9.00017C0.499479 9.21624 0.554879 9.42877 0.660815 9.61708C0.766751 9.8054 0.919619 9.96309 1.10455 10.0748L12.5655 17.086C12.7587 17.2043 12.98 17.2689 13.2065 17.2731C13.4331 17.2773 13.6566 17.2209 13.8541 17.1098C14.0497 17.0005 14.2126 16.841 14.3261 16.6478C14.4397 16.4546 14.4997 16.2346 14.5 16.0105V1.98983C14.4997 1.76574 14.4397 1.54578 14.3261 1.35257C14.2126 1.15936 14.0497 0.999877 13.8541 0.890516C13.6566 0.77943 13.4331 0.723074 13.2065 0.727269C12.98 0.731464 12.7587 0.796058 12.5655 0.91438L1.10455 7.92551C0.919619 8.03725 0.766751 8.19495 0.660815 8.38326C0.554879 8.57158 0.499479 8.78411 0.500004 9.00017Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter id="filter0_d_2295_236" x="0.5" y="0.727051" width="15" height="17.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_236" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_236" result="shape" />
                  </filter>
                </defs>
              </svg>
            </span>
            <span className="carouselBtn top next">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <g filter="url(#filter0_d_2295_239)">
                  <path
                    d="M14.5 9.00017C14.5005 9.21624 14.4451 9.42877 14.3392 9.61708C14.2332 9.8054 14.0804 9.96309 13.8954 10.0748L2.43454 17.086C2.24132 17.2043 2.02001 17.2689 1.79347 17.2731C1.56693 17.2773 1.34338 17.2209 1.14591 17.1098C0.950315 17.0005 0.787379 16.841 0.673858 16.6478C0.560336 16.4546 0.500327 16.2346 0.5 16.0105V1.98983C0.500327 1.76574 0.560336 1.54578 0.673858 1.35257C0.787379 1.15936 0.950315 0.999877 1.14591 0.890516C1.34338 0.77943 1.56693 0.723074 1.79347 0.727269C2.02001 0.731464 2.24132 0.796058 2.43454 0.91438L13.8954 7.92551C14.0804 8.03725 14.2332 8.19495 14.3392 8.38326C14.4451 8.57158 14.5005 8.78411 14.5 9.00017Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter id="filter0_d_2295_239" x="0.5" y="0.727051" width="15" height="17.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_239" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_239" result="shape" />
                  </filter>
                </defs>
              </svg>
            </span>
            <span className="carouselBtn top next">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <g filter="url(#filter0_d_2295_239)">
                  <path
                    d="M14.5 9.00017C14.5005 9.21624 14.4451 9.42877 14.3392 9.61708C14.2332 9.8054 14.0804 9.96309 13.8954 10.0748L2.43454 17.086C2.24132 17.2043 2.02001 17.2689 1.79347 17.2731C1.56693 17.2773 1.34338 17.2209 1.14591 17.1098C0.950315 17.0005 0.787379 16.841 0.673858 16.6478C0.560336 16.4546 0.500327 16.2346 0.5 16.0105V1.98983C0.500327 1.76574 0.560336 1.54578 0.673858 1.35257C0.787379 1.15936 0.950315 0.999877 1.14591 0.890516C1.34338 0.77943 1.56693 0.723074 1.79347 0.727269C2.02001 0.731464 2.24132 0.796058 2.43454 0.91438L13.8954 7.92551C14.0804 8.03725 14.2332 8.19495 14.3392 8.38326C14.4451 8.57158 14.5005 8.78411 14.5 9.00017Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter id="filter0_d_2295_239" x="0.5" y="0.727051" width="15" height="17.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_239" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_239" result="shape" />
                  </filter>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <g filter="url(#filter0_d_2295_239)">
                  <path
                    d="M14.5 9.00017C14.5005 9.21624 14.4451 9.42877 14.3392 9.61708C14.2332 9.8054 14.0804 9.96309 13.8954 10.0748L2.43454 17.086C2.24132 17.2043 2.02001 17.2689 1.79347 17.2731C1.56693 17.2773 1.34338 17.2209 1.14591 17.1098C0.950315 17.0005 0.787379 16.841 0.673858 16.6478C0.560336 16.4546 0.500327 16.2346 0.5 16.0105V1.98983C0.500327 1.76574 0.560336 1.54578 0.673858 1.35257C0.787379 1.15936 0.950315 0.999877 1.14591 0.890516C1.34338 0.77943 1.56693 0.723074 1.79347 0.727269C2.02001 0.731464 2.24132 0.796058 2.43454 0.91438L13.8954 7.92551C14.0804 8.03725 14.2332 8.19495 14.3392 8.38326C14.4451 8.57158 14.5005 8.78411 14.5 9.00017Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter id="filter0_d_2295_239" x="0.5" y="0.727051" width="15" height="17.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_239" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_239" result="shape" />
                  </filter>
                </defs>
              </svg>
            </span>
          </div>
          <div id="bottomCarousel">
            <div className="carouselContainer">
              <Image src={CollabIMG.bottom1} alt="" className="carouselImg noDisplay one top" />
              <Image src={CollabIMG.bottom2} alt="" className="carouselImg noDisplay two" />
              <Image src={CollabIMG.top3} alt="" className="carouselImg noDisplay three" />
              <Image src={CollabIMG.bottom1} alt="" className="carouselImg four" />
            </div>
          </div>
          <div className="carouselBtnDiv">
            <span className="carouselBtn bottom prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <g filter="url(#filter0_d_2295_236)">
                  <path
                    d="M0.500004 9.00017C0.499479 9.21624 0.554879 9.42877 0.660815 9.61708C0.766751 9.8054 0.919619 9.96309 1.10455 10.0748L12.5655 17.086C12.7587 17.2043 12.98 17.2689 13.2065 17.2731C13.4331 17.2773 13.6566 17.2209 13.8541 17.1098C14.0497 17.0005 14.2126 16.841 14.3261 16.6478C14.4397 16.4546 14.4997 16.2346 14.5 16.0105V1.98983C14.4997 1.76574 14.4397 1.54578 14.3261 1.35257C14.2126 1.15936 14.0497 0.999877 13.8541 0.890516C13.6566 0.77943 13.4331 0.723074 13.2065 0.727269C12.98 0.731464 12.7587 0.796058 12.5655 0.91438L1.10455 7.92551C0.919619 8.03725 0.766751 8.19495 0.660815 8.38326C0.554879 8.57158 0.499479 8.78411 0.500004 9.00017Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter id="filter0_d_2295_236" x="0.5" y="0.727051" width="15" height="17.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_236" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_236" result="shape" />
                  </filter>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <g filter="url(#filter0_d_2295_236)">
                  <path
                    d="M0.500004 9.00017C0.499479 9.21624 0.554879 9.42877 0.660815 9.61708C0.766751 9.8054 0.919619 9.96309 1.10455 10.0748L12.5655 17.086C12.7587 17.2043 12.98 17.2689 13.2065 17.2731C13.4331 17.2773 13.6566 17.2209 13.8541 17.1098C14.0497 17.0005 14.2126 16.841 14.3261 16.6478C14.4397 16.4546 14.4997 16.2346 14.5 16.0105V1.98983C14.4997 1.76574 14.4397 1.54578 14.3261 1.35257C14.2126 1.15936 14.0497 0.999877 13.8541 0.890516C13.6566 0.77943 13.4331 0.723074 13.2065 0.727269C12.98 0.731464 12.7587 0.796058 12.5655 0.91438L1.10455 7.92551C0.919619 8.03725 0.766751 8.19495 0.660815 8.38326C0.554879 8.57158 0.499479 8.78411 0.500004 9.00017Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter id="filter0_d_2295_236" x="0.5" y="0.727051" width="15" height="17.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_236" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_236" result="shape" />
                  </filter>
                </defs>
              </svg>
            </span>
            <span className="carouselBtn bottom next">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <g filter="url(#filter0_d_2295_239)">
                  <path
                    d="M14.5 9.00017C14.5005 9.21624 14.4451 9.42877 14.3392 9.61708C14.2332 9.8054 14.0804 9.96309 13.8954 10.0748L2.43454 17.086C2.24132 17.2043 2.02001 17.2689 1.79347 17.2731C1.56693 17.2773 1.34338 17.2209 1.14591 17.1098C0.950315 17.0005 0.787379 16.841 0.673858 16.6478C0.560336 16.4546 0.500327 16.2346 0.5 16.0105V1.98983C0.500327 1.76574 0.560336 1.54578 0.673858 1.35257C0.787379 1.15936 0.950315 0.999877 1.14591 0.890516C1.34338 0.77943 1.56693 0.723074 1.79347 0.727269C2.02001 0.731464 2.24132 0.796058 2.43454 0.91438L13.8954 7.92551C14.0804 8.03725 14.2332 8.19495 14.3392 8.38326C14.4451 8.57158 14.5005 8.78411 14.5 9.00017Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter id="filter0_d_2295_239" x="0.5" y="0.727051" width="15" height="17.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_239" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_239" result="shape" />
                  </filter>
                </defs>
              </svg>
            </span>
            <span className="carouselBtn bottom next">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <g filter="url(#filter0_d_2295_239)">
                  <path
                    d="M14.5 9.00017C14.5005 9.21624 14.4451 9.42877 14.3392 9.61708C14.2332 9.8054 14.0804 9.96309 13.8954 10.0748L2.43454 17.086C2.24132 17.2043 2.02001 17.2689 1.79347 17.2731C1.56693 17.2773 1.34338 17.2209 1.14591 17.1098C0.950315 17.0005 0.787379 16.841 0.673858 16.6478C0.560336 16.4546 0.500327 16.2346 0.5 16.0105V1.98983C0.500327 1.76574 0.560336 1.54578 0.673858 1.35257C0.787379 1.15936 0.950315 0.999877 1.14591 0.890516C1.34338 0.77943 1.56693 0.723074 1.79347 0.727269C2.02001 0.731464 2.24132 0.796058 2.43454 0.91438L13.8954 7.92551C14.0804 8.03725 14.2332 8.19495 14.3392 8.38326C14.4451 8.57158 14.5005 8.78411 14.5 9.00017Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter id="filter0_d_2295_239" x="0.5" y="0.727051" width="15" height="17.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_239" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_239" result="shape" />
                  </filter>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <g filter="url(#filter0_d_2295_239)">
                  <path
                    d="M14.5 9.00017C14.5005 9.21624 14.4451 9.42877 14.3392 9.61708C14.2332 9.8054 14.0804 9.96309 13.8954 10.0748L2.43454 17.086C2.24132 17.2043 2.02001 17.2689 1.79347 17.2731C1.56693 17.2773 1.34338 17.2209 1.14591 17.1098C0.950315 17.0005 0.787379 16.841 0.673858 16.6478C0.560336 16.4546 0.500327 16.2346 0.5 16.0105V1.98983C0.500327 1.76574 0.560336 1.54578 0.673858 1.35257C0.787379 1.15936 0.950315 0.999877 1.14591 0.890516C1.34338 0.77943 1.56693 0.723074 1.79347 0.727269C2.02001 0.731464 2.24132 0.796058 2.43454 0.91438L13.8954 7.92551C14.0804 8.03725 14.2332 8.19495 14.3392 8.38326C14.4451 8.57158 14.5005 8.78411 14.5 9.00017Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter id="filter0_d_2295_239" x="0.5" y="0.727051" width="15" height="17.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_239" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_239" result="shape" />
                  </filter>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <div className="bigBtn" id="dressMeBtn">
          DRESS ME
        </div>
      </div>
    </main>
  );
};

export default cluelessContent;
