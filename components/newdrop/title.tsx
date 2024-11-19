/** @format */

import React from "react";

const title = () => {
  return (
    <div className="title-content flex justify-between items-center self-stretch bg-white p-8">
      {/* Title on the left */}
      <h1 className="title-left text-4xl font-bold">New Drop</h1>

      {/* Description on the right */}
      <div className="title-right text-right flex-col">
        <p className="text-lg text-gray-700">Elevate your style with the adora New Collection—a blend of soft pastels and modern elegance. Shop the latest looks now!</p>
        <a href="#" className="mt-4 inline-block text-blue-500 underline">
          Explore More
        </a>
      </div>
    </div>
  );
};

export default title;
