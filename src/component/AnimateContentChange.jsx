import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimateContentChange = ({ children }) => {
  return (
    <div className="animatedContainer">
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  );
};

export default AnimateContentChange;
