import { useState } from "react";
import { BsArrowDown, img1 } from "./assets";
import "./App.css";

function App() {
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
            <button>
              <BsArrowDown />
            </button>
            <button>
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
          <img src={img1} className="card-image pp" />
        </div>
        <img />
      </div>
    </div>
  );
}

export default App;
