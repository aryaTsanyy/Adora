/** @format */

import Image, { StaticImageData } from "next/image";
import React from "react";

interface CategoryCardProps {
  title: string;
  imageUrl: StaticImageData;
}

const categorycard: React.FC<CategoryCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="category-card relative bg-cover bg-center overflow-hidden">
      <Image src={imageUrl} alt={title} className="object-cover" />
      <div className="category-content absolute inset-0 bg-opacity-30 gap-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <button className="px-8 py-2 hover:bg-gray-200 transition">Shop Now</button>
      </div>
      <div className="overlay-category w-full h-full absolute"></div>
    </div>
  );
};

export default categorycard;
