import useAppHook from "./hooks/useApphook";
import { img1, img2, img3, img4, img5, img6 } from "./assets";
import "./App.css";
import data from "./data/data.json";
import ChangingSingleImage from "./component/ChangingSingleImage";
import RotatingPictureComponent from "./component/RotatingPictureComponent";
import Main from "./component/Main";

function App() {
  const { classNameSetter, currentIndex, ...rest } = useAppHook();
  const imagesArray = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="App">
      <Main
        data={data[currentIndex]}
        currentIndex={currentIndex}
        imagesArray={imagesArray}
        {...rest}
      />

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
