import React, { useRef } from "react";

const ChangingSingleImage = ({ imagesArray, currentIndex }) => {
  return (
    <div>
      {imagesArray.map((each, index) => {
        let className = "single-image ";
        if (index === currentIndex) {
          className += "activeSingleCard";
        } else {
          className += "inActiveSingleCard";
        }
        return <img src={each} className={className} key={index} />;
      })}
    </div>
  );
};

export default ChangingSingleImage;
