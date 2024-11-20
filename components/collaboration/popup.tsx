/** @format */

import React from "react";

type PopUpProps = {
  message: string;
  isVisible: boolean;
};

const PopupMessages: React.FC<PopUpProps> = ({ message, isVisible }) => {
  return (
    <div className={`popup relative w-full h-full mx-auto ${isVisible ? "visible" : ""}`} id="popUpDiv">
      <p id="popup absolute">{message}</p>
      <div id="popUpShadow"></div>
    </div>
  );
};

export default PopupMessages;
