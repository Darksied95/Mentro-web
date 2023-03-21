import useAppHook from "./hooks/useApphook";
import {
  BsArrowDown,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "./assets";
import "./App.css";

function App() {
  let arr = [img1, img2, img3, img4, img5, img6, img7, img8];
  const { classNameSetter, handleIncrement, handleDecrement } = useAppHook();
  return (
    <div className="App">
      <div>
        <h1>4.9</h1>
        <h2>*****</h2>
        <h3 className="name">Saurav Pal</h3>
        <p className="title">SDE - 2 @Amazon</p>
        <div className="about-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ad.
            A voluptatum nemo eveniet ratione ducimus expedita non porro esse
            maiores veniam commodi praesentium eligendi sint inventore sequi,
            quis fugiat.
          </p>
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
        <img />
      </div>
    </div>
  );
}

export default App;
