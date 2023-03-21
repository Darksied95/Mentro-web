import React from "react";
import { BsStarFill, BsStarHalf } from "../assets/";

const Stars = ({ value }) => {
  return (
    <div style={{ color: "#4caf50", fontSize: "1.5rem" }}>
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      {+value === 5 ? <BsStarFill /> : <BsStarHalf />}
    </div>
  );
};

export default Stars;
