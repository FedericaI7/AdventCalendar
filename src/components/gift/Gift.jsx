import { useState } from "react";
import "./index.css";

const Gift = ({ giftToday, textToday, setGiftOpen }) => {
  const closeX = () => {
    setGiftOpen(false);
  };

  return (
    <div className="Gift">
      <div className="Gift__card">
        <img className="giftimage" src={giftToday} alt="Gift" />
        <p>{textToday}</p>
        <span onClick={closeX} className="Gift__close">
          <i className="bi bi-x-lg"></i>
        </span>
      </div>
    </div>
  );
};

export default Gift;

// "text": "Conquer winter with style and a dash of drama! In today's box, discover the multipurpose scarf – perfect for keeping warm or achieving that mysterious, intriguing look. Never underestimate the power of a well-knotted scarf: ready to face the cold with a touch of elegance... or theatricality! ❄️🧣"
