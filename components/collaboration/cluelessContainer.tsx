/** @format */
"use client";
import React, { useState } from "react";
import CluelessCarousel from "./CluelessCarousel";
import PopupMessages from "./popup";
import { leopardIMG } from "@/app/images/collaboration";
import Image from "next/image";

const CluelessContainer = () => {
  const topImages = ["/images/top1.png", "/images/top2.png", "/images/top3.png"];
  const bottomImages = ["/images/bottom1.png", "/images/bottom2.png", "/images/bottom1.png"];

  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [popupMessage, setPopupMessage] = useState("");
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  // Fungsi untuk mengecek kecocokan gambar
  const checkMatch = () => {
    if (topIndex === bottomIndex) {
      // Menambahkan objek Audio untuk correctSound
      const correctSound = new Audio("https://github.com/praxeds/codepen-chers-closet/blob/f5947469f008c723b9b2aa5be51f2a8cfac0c66a/assets/audio/mixkit-winning-chimes-2015.wav?raw=true");
      // Jika indeks sama, tampilkan pesan "It's a match!"
      setPopupMessage(`It's a match!`);
      correctSound.play();
    } else {
      const wrongSound = new Audio("https://github.com/praxeds/codepen-chers-closet/blob/f5947469f008c723b9b2aa5be51f2a8cfac0c66a/assets/audio/mixkit-wrong-long-buzzer-954.wav?raw=true");
      // Jika tidak cocok, tampilkan pesan "No match!"
      setPopupMessage(`No match!`);
      wrongSound.play();
    }
    setIsPopUpVisible(true);

    // Sembunyikan popup setelah 1.5 detik
    setTimeout(() => setIsPopUpVisible(false), 1500);
  };

  return (
    <div className="app w-full flex relative z-20">
      <Image src={leopardIMG} alt="bgleopard" objectFit="cover" className="absolute w-full h-full" />
      <button className="bigBtn z-20" onClick={checkMatch}>
        Browse
      </button>
      <div className="carousel-gridframe flex flex-col justify-end">
        <CluelessCarousel images={topImages} isTop={true} currentIndex={topIndex} setIndex={setTopIndex} />
        <CluelessCarousel images={bottomImages} isTop={false} currentIndex={bottomIndex} setIndex={setBottomIndex} />
      </div>
      <button className="bigBtn z-20" id="dressMeBtn" onClick={checkMatch}>
        Dress Me!
      </button>
      <PopupMessages message={popupMessage} isVisible={isPopUpVisible} />
    </div>
  );
};

export default CluelessContainer;
