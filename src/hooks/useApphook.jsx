import { useState } from "react";

const [secondIndexLeft, setSecondIndexLeft] = useState(0);
const [firstIndexLeft, setFirstIndexLeft] = useState(1);
const [currentIndex, setCurrentIndex] = useState(2);
const [firstIndexRight, setFirstIndexRight] = useState(3);
const [secondIndexRight, setSecondIndexRight] = useState(4);

function handleIncrement() {
  let nextIndex = currentIndex + 1;
  if (nextIndex === arr.length - 2) {
    setCurrentIndex(nextIndex);
    setFirstIndexRight(nextIndex + 1);
    setSecondIndexRight(0);
  } else if (nextIndex === arr.length - 1) {
    setCurrentIndex(nextIndex);
    setFirstIndexRight(0);
    setSecondIndexRight(1);
  } else if (nextIndex === arr.length) {
    setCurrentIndex(0);
    setFirstIndexRight(1);
    setSecondIndexRight(2);
  } else {
    setCurrentIndex(nextIndex);
    setFirstIndexRight(nextIndex + 1);
    setSecondIndexRight(nextIndex + 2);
  }

  if (nextIndex === 1) {
    setSecondIndexLeft(arr.length - 1);
  } else {
    setSecondIndexLeft(nextIndex - 2);
  }
  setFirstIndexLeft(nextIndex - 1);
}

function handleDecrement() {
  let prevIndex = currentIndex - 1;

  if (prevIndex === 1) {
    setCurrentIndex(prevIndex);
    setFirstIndexLeft(prevIndex - 1);
    setSecondIndexLeft(arr.length - 1);
  } else if (prevIndex === 0) {
    setCurrentIndex(prevIndex);
    setFirstIndexLeft(arr.length - 1);
    setSecondIndexLeft(arr.length - 2);
  } else if (prevIndex === -1) {
    setCurrentIndex(arr.length - 1);
    setFirstIndexLeft(arr.length - 2);
    setSecondIndexLeft(arr.length - 3);
  } else {
    setCurrentIndex(prevIndex);
    setFirstIndexLeft(prevIndex - 1);
    setSecondIndexLeft(prevIndex - 2);
  }
  setFirstIndexRight(prevIndex + 1);

  if (prevIndex === arr.length - 2) {
    setSecondIndexRight(0);
  } else {
    setSecondIndexRight(prevIndex + 2);
  }
}
