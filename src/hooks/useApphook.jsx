import { useState } from "react";

function useAppHook() {
  const [secondIndexLeft, setSecondIndexLeft] = useState(0);
  const [firstIndexLeft, setFirstIndexLeft] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [firstIndexRight, setFirstIndexRight] = useState(3);
  const [secondIndexRight, setSecondIndexRight] = useState(4);

  function handleIncrement(imagesArray) {
    let nextIndex = currentIndex + 1;

    switch (nextIndex) {
      case imagesArray.length - 2:
        setCurrentIndex(nextIndex);
        setFirstIndexRight(nextIndex + 1);
        setSecondIndexRight(0);
        break;

      case imagesArray.length - 1:
        setCurrentIndex(nextIndex);
        setFirstIndexRight(0);
        setSecondIndexRight(1);
        break;

      case imagesArray.length:
        setCurrentIndex(0);
        setFirstIndexRight(1);
        setSecondIndexRight(2);
        break;

      default:
        setCurrentIndex(nextIndex);
        setFirstIndexRight(nextIndex + 1);
        setSecondIndexRight(nextIndex + 2);
        break;
    }

    setSecondIndexLeft(
      nextIndex === 1 ? imagesArray.length - 1 : nextIndex - 2
    );
    setFirstIndexLeft(nextIndex - 1);
  }

  function handleDecrement(imagesArray) {
    let prevIndex = currentIndex - 1;

    switch (prevIndex) {
      case 1:
        setCurrentIndex(prevIndex);
        setFirstIndexLeft(prevIndex - 1);
        setSecondIndexLeft(imagesArray.length - 1);
        break;
      case 0:
        setCurrentIndex(prevIndex);
        setFirstIndexLeft(imagesArray.length - 1);
        setSecondIndexLeft(imagesArray.length - 2);
        break;
      case -1:
        setCurrentIndex(imagesArray.length - 1);
        setFirstIndexLeft(imagesArray.length - 2);
        setSecondIndexLeft(imagesArray.length - 3);
        break;

      default:
        setCurrentIndex(prevIndex);
        setFirstIndexLeft(prevIndex - 1);
        setSecondIndexLeft(prevIndex - 2);
        break;
    }

    setSecondIndexRight(
      prevIndex === imagesArray.length - 2 ? 0 : prevIndex + 2
    );
    setFirstIndexRight(prevIndex + 1);
  }

  function classNameSetter(index, single) {
    if (single) {
      return "widthFull";
    }
    let className = "card-image ";
    switch (index) {
      case currentIndex:
        className += "activeCard";
        break;
      case firstIndexLeft:
        className += "firstCardLeft";
        break;
      case secondIndexLeft:
        className += "secondCardLeft";
        break;
      case firstIndexRight:
        className += "firstCardRight";
        break;
      case secondIndexRight:
        className += "secondCardRight";
        break;
      default:
        className += "inActiveCard";
        break;
    }
    return className;
  }

  return { handleIncrement, handleDecrement, classNameSetter, currentIndex };
}

export default useAppHook;
