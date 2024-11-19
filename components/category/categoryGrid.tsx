/** @format */

import React from "react";
import Categorycard from "./categorycard";
import * as imageTop from "@/app/images/category";

const categoryGrid: React.FC = () => {
  return (
    <div className="w-full h-auto bg-white flex items-center justify-center">
      <div className="m-10 grid grid-cols-1 md:grid-cols-2 w-full gap-3 gap-x-3 justify-center content-center items-center">
        <Categorycard title="Bottom" imageUrl={imageTop.Bottoms} />
        <Categorycard title="Tops" imageUrl={imageTop.Top} />
        <Categorycard title="Dresses" imageUrl={imageTop.Dresses} />
        <Categorycard title="Accessories" imageUrl={imageTop.Accesories} />
      </div>
    </div>
  );
};

export default categoryGrid;
