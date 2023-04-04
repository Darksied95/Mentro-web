import { useState } from "react";

function useAppHook() {
  const [secondIndexLeft, setSecondIndexLeft] = useState(0);
  const [firstIndexLeft, setFirstIndexLeft] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [firstIndexRight, setFirstIndexRight] = useState(3);
  const [secondIndexRight, setSecondIndexRight] = useState(4);

  function handleIncrement(imagesArray) {
    let nextIndex = currentIndex + 1;
    if (nextIndex === imagesArray.length - 2) {
      setCurrentIndex(nextIndex);
      setFirstIndexRight(nextIndex + 1);
      setSecondIndexRight(0);
    } else if (nextIndex === imagesArray.length - 1) {
      setCurrentIndex(nextIndex);
      setFirstIndexRight(0);
      setSecondIndexRight(1);
    } else if (nextIndex === imagesArray.length) {
      setCurrentIndex(0);
      setFirstIndexRight(1);
      setSecondIndexRight(2);
    } else {
      setCurrentIndex(nextIndex);
      setFirstIndexRight(nextIndex + 1);
      setSecondIndexRight(nextIndex + 2);
    }

    if (nextIndex === 1) {
      setSecondIndexLeft(imagesArray.length - 1);
    } else {
      setSecondIndexLeft(nextIndex - 2);
    }
    setFirstIndexLeft(nextIndex - 1);
  }

  function handleDecrement(imagesArray) {
    let prevIndex = currentIndex - 1;
    if (prevIndex === 1) {
      setCurrentIndex(prevIndex);
      setFirstIndexLeft(prevIndex - 1);
      setSecondIndexLeft(imagesArray.length - 1);
    } else if (prevIndex === 0) {
      setCurrentIndex(prevIndex);
      setFirstIndexLeft(imagesArray.length - 1);
      setSecondIndexLeft(imagesArray.length - 2);
    } else if (prevIndex === -1) {
      setCurrentIndex(imagesArray.length - 1);
      setFirstIndexLeft(imagesArray.length - 2);
      setSecondIndexLeft(imagesArray.length - 3);
    } else {
      setCurrentIndex(prevIndex);
      setFirstIndexLeft(prevIndex - 1);
      setSecondIndexLeft(prevIndex - 2);
    }
    setFirstIndexRight(prevIndex + 1);

    if (prevIndex === imagesArray.length - 2) {
      setSecondIndexRight(0);
    } else {
      setSecondIndexRight(prevIndex + 2);
    }
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
