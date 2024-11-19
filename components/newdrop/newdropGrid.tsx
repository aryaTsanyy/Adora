/** @format */

import React from "react";
import NewDropCard from "./newdropCard";
import * as NewDropIMG from "@/app/images/newdrop";
import { NewDropHover1, NewDropHover2, NewDropHover3, NewDropHover4 } from "@/app/images/newdrop";

const products = [
  {
    imageSrc: NewDropIMG.NewDrop1, // replace with actual paths or URLs
    hoverImageSrc: NewDropIMG.NewDropHover1,
    category: "Bottoms",
    name: "Bonney Bow Detail Sweatpants",
    price: "$32.00",
  },
  {
    imageSrc: NewDropIMG.NewDrop2,
    hoverImageSrc: NewDropHover2,
    category: "Tops",
    name: "Tahlia Off Shoulder Top",
    price: "$32.00",
  },
  {
    imageSrc: NewDropIMG.NewDrop3,
    hoverImageSrc: NewDropHover3,
    category: "Tops",
    name: "Jessy Cable Knit Oversized Sweater",
    price: "$32.00",
  },
  {
    imageSrc: NewDropIMG.NewDrop4,
    hoverImageSrc: NewDropHover4,
    category: "Dresses",
    name: "Get Edikted Sweatshirt",
    price: "$32.00",
  },
];
const newdropGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {products.map((product, index) => (
        <NewDropCard key={index} imageSrc={product.imageSrc} hoverImageSrc={product.hoverImageSrc} category={product.category} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default newdropGrid;
