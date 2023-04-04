import React from "react";

const ChangingSingleImage = ({ imagesArray, currentIndex: c }) => {
  return (
    <>
      {imagesArray.map((each, i) => {
        return (
          <img
            key={i}
            src={each}
            className={`single-image ${
              i == c ? "activeSingleCard" : "inActiveSingleCard"
            }`}
          />
        );
      })}
    </>
  );
};

export default ChangingSingleImage;
