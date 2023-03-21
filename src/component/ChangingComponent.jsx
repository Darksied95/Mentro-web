import React, { createElement } from "react";

const ChangingComponent = ({
  data,
  datatype,
  tagName,
  className,
  currentIndex,
}) => {
  return (
    <div style={{ position: "relative", paddingBottom: "1rem" }}>
      {data.map((each, index) => {
        let classname = className;
        if (currentIndex === index) {
          classname += " active";
        } else {
          classname += " inactive";
        }
        return createElement(tagName, { className: classname }, each[datatype]);
      })}
    </div>
  );
};

export default ChangingComponent;
