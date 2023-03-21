import useAppHook from "./hooks/useApphook";
import {
  BsArrowDown,
  BsStarFill,
  BsStarHalf,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
} from "./assets";
import "./App.css";
import data from "./data/data.json";
import Stars from "./component/Stars";

function App() {
  let arr = [img1, img2, img3, img4, img5, img6];
  const { classNameSetter, handleIncrement, handleDecrement, currentIndex } =
    useAppHook();
  const { rating, about, name, title } = data[currentIndex];
  return (
    <div className="App">
      <div>
        <h1>{rating}</h1>
        <Stars value={rating} />
        <h3 className="name">{name}</h3>
        <p className="title">{title}</p>
        <div className="about-container">
          <p>{about}</p>
          <div>
            <button onClick={() => handleIncrement(arr)}>
              <BsArrowDown />
            </button>
            <button onClick={() => handleDecrement(arr)}>
              <BsArrowDown />
            </button>
          </div>
        </div>
        <div className="button-container">
          <button>Book a session</button>
          <button>Saumya Singh</button>
        </div>
      </div>

      <div className="outcast">
        <div className="card-container">
          {arr.map((each, index) => {
            const classNames = classNameSetter(index);
            return <img src={each} className={classNames} />;
          })}
        </div>
      </div>
      <img src={arr[currentIndex]} className="single-image" />
    </div>
  );
}

export default App;
