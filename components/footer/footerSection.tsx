/** @format */

import React from "react";
import Emailaddress from "./emailaddress";
import Image from "next/image";
import { FooterBg } from "@/app/images/footer";

const footerSection = () => {
  return (
    <div className="footerSection bg-black flex items-stretch h-full">
      <div className="left-footer ml-14 pt-14 pb-12 flex flex-col gap-44 items-start">
        <div className="top-footer w-full flex items-start justify-between pr-12">
          <div className="footer-list">
            <h1>Catalog</h1>
            <p>T-shirt</p>
            <p>Pants</p>
            <p>Hoodie</p>
            <p>Jacket</p>
            <p>Footwear</p>
          </div>
          <div className="footer-list">
            <h1>Discover</h1>
            <p>T-shirt</p>
            <p>Pants</p>
            <p>Hoodie</p>
            <p>Jacket</p>
            <p>Footwear</p>
          </div>
          <div className="footer-list">
            <h1>Customer Care</h1>
            <p>T-shirt</p>
            <p>Pants</p>
            <p>Hoodie</p>
            <p>Jacket</p>
            <p>Footwear</p>
          </div>
          <div className="footer-list">
            <h1>Social Media</h1>
            <p>T-shirt</p>
            <p>Pants</p>
            <p>Hoodie</p>
            <p>Jacket</p>
            <p>Footwear</p>
          </div>
        </div>
        <div className="bottom-footer flex pr-12 items-end justify-between">
          <h1>Subscribe now to get our latest promotion and colaboration directly to your inbox</h1>
          <Emailaddress />
        </div>
      </div>
      <div className="right-footer flex-grow items-end justify-end relative">
        <Image src={FooterBg} alt="bg" objectFit="cover" className="h-full absolute" />
        <div className="rightfooterContent absolute z-10 left-5 bottom-5 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path
              d="M17 3.1875C14.2682 3.1875 11.5976 3.99759 9.32619 5.51533C7.05474 7.03306 5.28436 9.19028 4.23892 11.7142C3.19348 14.2381 2.91995 17.0153 3.45291 19.6947C3.98587 22.374 5.30138 24.8352 7.23309 26.7669C9.16481 28.6986 11.626 30.0141 14.3053 30.5471C16.9847 31.0801 19.7619 30.8065 22.2858 29.7611C24.8097 28.7157 26.9669 26.9453 28.4847 24.6738C30.0024 22.4024 30.8125 19.7319 30.8125 17C30.8086 13.3379 29.3522 9.82687 26.7626 7.23736C24.1731 4.64785 20.6621 3.19137 17 3.1875ZM17 28.6875C14.6884 28.6875 12.4288 28.002 10.5068 26.7178C8.58478 25.4336 7.08676 23.6082 6.20216 21.4726C5.31756 19.337 5.08611 16.987 5.53708 14.7199C5.98804 12.4527 7.10117 10.3702 8.7357 8.73569C10.3702 7.10116 12.4527 5.98804 14.7199 5.53707C16.987 5.08611 19.337 5.31756 21.4726 6.20216C23.6082 7.08676 25.4336 8.58477 26.7178 10.5068C28.002 12.4288 28.6875 14.6884 28.6875 17C28.684 20.0986 27.4515 23.0694 25.2604 25.2604C23.0694 27.4515 20.0986 28.684 17 28.6875ZM12.75 17C12.75 17.892 13.0307 18.7614 13.5522 19.485C14.0738 20.2086 14.8098 20.7498 15.656 21.0319C16.5023 21.314 17.4158 21.3226 18.2672 21.0567C19.1186 20.7907 19.8648 20.2636 20.4 19.55C20.5693 19.3246 20.8211 19.1756 21.1002 19.1359C21.3793 19.0961 21.6627 19.1689 21.8882 19.3382C22.1136 19.5074 22.2626 19.7593 22.3023 20.0384C22.342 20.3175 22.2693 20.6009 22.1 20.8263C21.297 21.8964 20.1777 22.6867 18.9006 23.0854C17.6235 23.4841 16.2534 23.4708 14.9843 23.0476C13.7151 22.6244 12.6113 21.8126 11.8291 20.7272C11.0469 19.6418 10.626 18.3379 10.626 17C10.626 15.6621 11.0469 14.3582 11.8291 13.2728C12.6113 12.1874 13.7151 11.3756 14.9843 10.9524C16.2534 10.5292 17.6235 10.5159 18.9006 10.9146C20.1777 11.3133 21.297 12.1036 22.1 13.1737C22.1838 13.2853 22.2448 13.4123 22.2795 13.5475C22.3142 13.6827 22.322 13.8234 22.3023 13.9616C22.2826 14.0998 22.2359 14.2328 22.1649 14.3529C22.0938 14.4731 21.9998 14.578 21.8882 14.6618C21.7765 14.7456 21.6495 14.8066 21.5143 14.8413C21.3791 14.8761 21.2384 14.8838 21.1002 14.8641C20.962 14.8445 20.8291 14.7978 20.7089 14.7267C20.5888 14.6556 20.4838 14.5616 20.4 14.45C19.8648 13.7364 19.1186 13.2093 18.2672 12.9433C17.4158 12.6774 16.5023 12.686 15.656 12.9681C14.8098 13.2502 14.0738 13.7914 13.5522 14.515C13.0307 15.2386 12.75 16.108 12.75 17Z"
              fill="white"
            />
          </svg>
          <h1>Adora. all right reserved </h1>
        </div>
      </div>
    </div>
  );
};

export default footerSection;
