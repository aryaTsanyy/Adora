/** @format */

import React from "react";

type PopUpProps = {
  message: string;
  isVisible: boolean;
};

const PopupMessages: React.FC<PopUpProps> = ({ message, isVisible }) => {
  return (
    <div className={`popup relative w-full h-full mx-auto ${isVisible ? "visible" : ""}`} id="popUpDiv">
      <p id="popup" className="absolute flex items-center justify-center">
        {message}
      </p>
      <div id="popUpShadow" className="flex items-center justify-center">
        {message}
      </div>
    </div>
  );
};

export default PopupMessages;
