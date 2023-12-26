import "./index.css";

const Box = ({ giftToday }) => {
  return (
    <div className="Box">
      <img src={giftToday} alt="image" />
    </div>
  );
};

export default Box;
