/** @format */

import React from "react";
import Emailaddress from "./emailaddress";
import Image from "next/image";
import { FooterBg } from "@/app/images/footer";

const footerSection = () => {
  return (
    <div className="footerSection bg-black flex">
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
      <div className="right-footer">
        <Image src={FooterBg} alt="bg" objectFit="cover" />
      </div>
    </div>
  );
};

export default footerSection;
