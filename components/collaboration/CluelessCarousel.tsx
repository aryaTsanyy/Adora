/** @format */
"use cient";
import Image from "next/image";
import React from "react";
type CarouselProps = {
  images: string[];
  isTop: boolean;
  currentIndex: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

const CluelessCarousel: React.FC<CarouselProps> = ({ images, isTop, currentIndex, setIndex }) => {
  const nextImg = () => {
    setIndex((currentIndex) => {
      const clickSound = new Audio("https://github.com/praxeds/codepen-chers-closet/blob/f5947469f008c723b9b2aa5be51f2a8cfac0c66a/assets/audio/lclick-13694.mp3?raw=true");
      clickSound.play(); // Memutar suara klik
      clickSound.currentTime = 0; // Reset suara ke awal sebelum diputar lagi
      return (currentIndex + 1) % images.length;
    });
  };
  // Fungsi untuk memutar gambar ke belakang dan memutar suara klik
  const prevImg = () => {
    setIndex((currentIndex) => {
      const clickSound = new Audio("https://github.com/praxeds/codepen-chers-closet/blob/f5947469f008c723b9b2aa5be51f2a8cfac0c66a/assets/audio/lclick-13694.mp3?raw=true");
      clickSound.play(); // Memutar suara klik
      clickSound.currentTime = 0; // Reset suara ke awal sebelum diputar lagi
      return (currentIndex - 1 + images.length) % images.length;
    });
  };
  return (
    <div className={`carousel flex flex-col ${isTop ? "top-carousel" : "bottom-carousel"}`}>
      <div className="carousel-item">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <div className="frame-btn w-full flex gap-0">
        <button className=" carouselBtn flex" onClick={prevImg}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
            <g filter="url(#filter0_d_2295_237)">
              <path
                d="M0.500004 9.00017C0.499479 9.21624 0.554879 9.42877 0.660815 9.61708C0.766751 9.8054 0.919619 9.96309 1.10455 10.0748L12.5655 17.086C12.7587 17.2043 12.98 17.2689 13.2065 17.2731C13.4331 17.2773 13.6566 17.2209 13.8541 17.1098C14.0497 17.0005 14.2126 16.841 14.3261 16.6478C14.4397 16.4546 14.4997 16.2346 14.5 16.0105V1.98983C14.4997 1.76574 14.4397 1.54578 14.3261 1.35257C14.2126 1.15936 14.0497 0.999877 13.8541 0.890516C13.6566 0.77943 13.4331 0.723074 13.2065 0.727269C12.98 0.731464 12.7587 0.796058 12.5655 0.91438L1.10455 7.92551C0.919619 8.03725 0.766751 8.19495 0.660815 8.38326C0.554879 8.57158 0.499479 8.78411 0.500004 9.00017Z"
                fill="black"
              />
            </g>
            <defs>
              <filter id="filter0_d_2295_237" x="0.5" y="0.727051" width="15" height="17.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="1" dy="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_237" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_237" result="shape" />
              </filter>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
            <g filter="url(#filter0_d_2295_237)">
              <path
                d="M0.500004 9.00017C0.499479 9.21624 0.554879 9.42877 0.660815 9.61708C0.766751 9.8054 0.919619 9.96309 1.10455 10.0748L12.5655 17.086C12.7587 17.2043 12.98 17.2689 13.2065 17.2731C13.4331 17.2773 13.6566 17.2209 13.8541 17.1098C14.0497 17.0005 14.2126 16.841 14.3261 16.6478C14.4397 16.4546 14.4997 16.2346 14.5 16.0105V1.98983C14.4997 1.76574 14.4397 1.54578 14.3261 1.35257C14.2126 1.15936 14.0497 0.999877 13.8541 0.890516C13.6566 0.77943 13.4331 0.723074 13.2065 0.727269C12.98 0.731464 12.7587 0.796058 12.5655 0.91438L1.10455 7.92551C0.919619 8.03725 0.766751 8.19495 0.660815 8.38326C0.554879 8.57158 0.499479 8.78411 0.500004 9.00017Z"
                fill="black"
              />
            </g>
            <defs>
              <filter id="filter0_d_2295_237" x="0.5" y="0.727051" width="15" height="17.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="1" dy="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_237" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_237" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>
        <button className=" carouselBtn flex" onClick={nextImg}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
            <g filter="url(#filter0_d_2295_242)">
              <path
                d="M14.5 9.00017C14.5005 9.21624 14.4451 9.42877 14.3392 9.61708C14.2332 9.8054 14.0804 9.96309 13.8954 10.0748L2.43454 17.086C2.24132 17.2043 2.02001 17.2689 1.79347 17.2731C1.56693 17.2773 1.34338 17.2209 1.14591 17.1098C0.950315 17.0005 0.787379 16.841 0.673858 16.6478C0.560336 16.4546 0.500327 16.2346 0.5 16.0105V1.98983C0.500327 1.76574 0.560336 1.54578 0.673858 1.35257C0.787379 1.15936 0.950315 0.999877 1.14591 0.890516C1.34338 0.77943 1.56693 0.723074 1.79347 0.727269C2.02001 0.731464 2.24132 0.796058 2.43454 0.91438L13.8954 7.92551C14.0804 8.03725 14.2332 8.19495 14.3392 8.38326C14.4451 8.57158 14.5005 8.78411 14.5 9.00017Z"
                fill="black"
              />
            </g>
            <defs>
              <filter id="filter0_d_2295_242" x="0.5" y="0.727051" width="15" height="18.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="1" dy="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_242" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_242" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>
        <button className=" carouselBtn flex" onClick={nextImg}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
            <g filter="url(#filter0_d_2295_242)">
              <path
                d="M14.5 9.00017C14.5005 9.21624 14.4451 9.42877 14.3392 9.61708C14.2332 9.8054 14.0804 9.96309 13.8954 10.0748L2.43454 17.086C2.24132 17.2043 2.02001 17.2689 1.79347 17.2731C1.56693 17.2773 1.34338 17.2209 1.14591 17.1098C0.950315 17.0005 0.787379 16.841 0.673858 16.6478C0.560336 16.4546 0.500327 16.2346 0.5 16.0105V1.98983C0.500327 1.76574 0.560336 1.54578 0.673858 1.35257C0.787379 1.15936 0.950315 0.999877 1.14591 0.890516C1.34338 0.77943 1.56693 0.723074 1.79347 0.727269C2.02001 0.731464 2.24132 0.796058 2.43454 0.91438L13.8954 7.92551C14.0804 8.03725 14.2332 8.19495 14.3392 8.38326C14.4451 8.57158 14.5005 8.78411 14.5 9.00017Z"
                fill="black"
              />
            </g>
            <defs>
              <filter id="filter0_d_2295_242" x="0.5" y="0.727051" width="15" height="18.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="1" dy="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_242" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_242" result="shape" />
              </filter>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
            <g filter="url(#filter0_d_2295_242)">
              <path
                d="M14.5 9.00017C14.5005 9.21624 14.4451 9.42877 14.3392 9.61708C14.2332 9.8054 14.0804 9.96309 13.8954 10.0748L2.43454 17.086C2.24132 17.2043 2.02001 17.2689 1.79347 17.2731C1.56693 17.2773 1.34338 17.2209 1.14591 17.1098C0.950315 17.0005 0.787379 16.841 0.673858 16.6478C0.560336 16.4546 0.500327 16.2346 0.5 16.0105V1.98983C0.500327 1.76574 0.560336 1.54578 0.673858 1.35257C0.787379 1.15936 0.950315 0.999877 1.14591 0.890516C1.34338 0.77943 1.56693 0.723074 1.79347 0.727269C2.02001 0.731464 2.24132 0.796058 2.43454 0.91438L13.8954 7.92551C14.0804 8.03725 14.2332 8.19495 14.3392 8.38326C14.4451 8.57158 14.5005 8.78411 14.5 9.00017Z"
                fill="black"
              />
            </g>
            <defs>
              <filter id="filter0_d_2295_242" x="0.5" y="0.727051" width="15" height="18.5464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="1" dy="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2295_242" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2295_242" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CluelessCarousel;
