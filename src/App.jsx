import useAppHook from "./hooks/useApphook";
import { BsArrowDown, img1, img2, img3, img4, img5, img6 } from "./assets";
import "./App.css";
import data from "./data/data.json";
import Stars from "./component/Stars";
import ChangingSingleImage from "./component/ChangingSingleImage";
import { motion } from "framer-motion";
import AnimateContentChange from "./component/AnimateContentChange";
import RotatingPictureComponent from "./component/RotatingPictureComponent";

function App() {
  const { classNameSetter, handleIncrement, handleDecrement, currentIndex } =
    useAppHook();
  const { rating, about, name, title } = data[currentIndex];
  const imagesArray = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="App">
      <div>
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
          <button>Saumya Singh</button>
        </div>
      </div>

      <RotatingPictureComponent
        imagesArray={imagesArray}
        classNameSetter={classNameSetter}
      />
      <ChangingSingleImage
        imagesArray={imagesArray}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default App;
