import React from "react";
import { BsStarFill, BsStarHalf } from "../assets/";
import AnimateContentChange from "./AnimateContentChange";
import { motion } from "framer-motion";

const Stars = ({ value }) => {
  return (
    <AnimateContentChange>
      <motion.div
        key={value}
        initial={{ opacity: 0, fontSize: "1rem" }}
        animate={{ opacity: 1, fontSize: "1.5rem" }}
        exit={{ opacity: 0, fontSize: "1rem" }}
        transition={{ duration: 0.5 }}
        className="animatedChild"
        style={{ color: "#4caf50" }}
      >
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        {+value === 5 ? <BsStarFill /> : <BsStarHalf />}
      </motion.div>
    </AnimateContentChange>
  );
};

export default Stars;
