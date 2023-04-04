import AnimateContentChange from "./AnimateContentChange";
import Stars from "./Stars";
import { motion } from "framer-motion";
import { BsArrowDown } from "../assets";

const Main = ({
  data,
  currentIndex,
  handleIncrement,
  handleDecrement,
  imagesArray,
}) => {
  const { rating, about, name, title } = data;
  return (
    <main>
      <AnimateContentChange>
        <motion.h1
          key={currentIndex}
          initial={{ opacity: 0, y: 10, x: 12 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="animatedChild"
        >
          {rating}
        </motion.h1>
      </AnimateContentChange>

      <Stars value={rating} />

      <AnimateContentChange>
        <motion.h3
          key={currentIndex}
          initial={{ opacity: 0, y: 10, x: 12 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="animatedChild name"
        >
          {name}
        </motion.h3>
      </AnimateContentChange>

      <AnimateContentChange>
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 10, x: 12 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="animatedChild title"
        >
          {title}
        </motion.p>
      </AnimateContentChange>
      <div className="about-container">
        <AnimateContentChange>
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10, x: 12 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="animatedChild"
          >
            {about}
          </motion.p>
        </AnimateContentChange>
        <div className="buttonsHolder">
          <button onClick={() => handleIncrement(imagesArray)}>
            <BsArrowDown />
          </button>
          <button onClick={() => handleDecrement(imagesArray)}>
            <BsArrowDown />
          </button>
        </div>
      </div>
      <div className="button-container">
        <button>Book a session</button>
        <button>{name}</button>
      </div>
    </main>
  );
};

export default Main;
