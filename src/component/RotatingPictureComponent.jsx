import useAppHook from "../hooks/useApphook";

const RotatingPictureComponent = ({ imagesArray, classNameSetter }) => {
  return (
    <div className="outcast">
      <div className="card-container">
        {imagesArray.map((each, index) => {
          const classNames = classNameSetter(index);
          return <img src={each} className={classNames} key={index} />;
        })}
      </div>
    </div>
  );
};

export default RotatingPictureComponent;
