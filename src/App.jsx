import useAppHook from "./hooks/useApphook";
import { BsArrowDown, img1, img2, img3, img4, img5, img6 } from "./assets";
import "./App.css";
import data from "./data/data.json";
import Stars from "./component/Stars";
import ChangingSingleImage from "./component/ChangingSingleImage";
import ChangingComponent from "./component/ChangingComponent";

function App() {
  let arr = [img1, img2, img3, img4, img5, img6];
  const { classNameSetter, handleIncrement, handleDecrement, currentIndex } =
    useAppHook();
  const { rating, about, name, title } = data[currentIndex];
  return (
    <div className="App">
      <div>
        <ChangingComponent
          data={data}
          datatype={"rating"}
          currentIndex={currentIndex}
          tagName={"h1"}
        />
        {/* <Stars value={rating} /> */}
        {/* <ChangingComponent
          data={data}
          currentIndex={currentIndex}
          tagName={Stars}
          className={"pp"}
        /> */}
        {/* <h3 className="name">{name}</h3> */}
        <ChangingComponent
          data={data}
          datatype={"name"}
          currentIndex={currentIndex}
          className="name"
          tagName={"h3"}
        />
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
            return <img src={each} className={classNames} key={index} />;
          })}
        </div>
      </div>
      <ChangingSingleImage arr={arr} currentIndex={currentIndex} />
    </div>
  );
}

export default App;
