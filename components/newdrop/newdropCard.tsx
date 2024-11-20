/** @format */
import React from "react";
import Image, { StaticImageData } from "next/image";
import * as NewDropIMG from "@/app/images/newdrop";

interface ProductCardProps {
  imageSrc: StaticImageData;
  hoverImageSrc: StaticImageData;
  category: string;
  name: string;
  price: string;
}

const newdropCard: React.FC<ProductCardProps> = ({ imageSrc, hoverImageSrc, category, name, price }) => {
  return (
    <div className="bg-white card-newdrop cursor-pointer">
      {/* Product Image */}
      <div className="relative w-full  frame-img">
        <Image src={imageSrc} alt={name} className="imgfirst rounded-md object-cover" />
        <Image src={hoverImageSrc} alt={`${name} Hover`} className="imghover absolute -z-10 inset-0  rounded-md object-cover " />
      </div>

      {/* Product Details */}
      <div className="newdrop-text mx-4 mb-4 mt-4">
        <p className="text-base font-medium text-gray-500">{category}</p>
        <h3 className="text-lg text-black font-semibold mt-1">{name}</h3>
        <p className="text-lg text-black font-normal mt-2">{price}</p>
      </div>
    </div>
  );
};

export default newdropCard;
