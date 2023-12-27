import "./index.css";
import data from "/src/data.json";
import Gift from "../gift/Gift";
import { useState } from "react";

const Boxes = () => {
  const [gift, setGift] = useState(null);
  const [textCard, setTextCard] = useState("");
  const [giftOpen, setGiftOpen] = useState(false);

  const sendGift = (id) => {
    const imageData = data.filter((el) => el.id === id);

    if (imageData) {
      const img = imageData[0].gift;
      const text = imageData[0].text;
      setGift(img);
      setTextCard(text);
      setGiftOpen(true);
    }
  };

  return (
    <div className="Boxes">
      <div className="Boxes__text">
        <h1>
          - THE - <br />
          <span id="chris">CHRISTMAS</span> <br />
          <span id="surv">Survival kit</span>
        </h1>
        <p>
          All the essentials you need <br />
          to survive the holidays
        </p>
      </div>

      {data.map((el) => (
        <button
          className={`box box__${el.id}`}
          onClick={() => sendGift(el.id)}
          key={el.id}
        >
          {el.id}
        </button>
      ))}
      {gift && giftOpen && (
        <Gift
          giftToday={gift}
          textToday={textCard}
          setGiftOpen={setGiftOpen}
          giftOpen={giftOpen}
        />
      )}
    </div>
  );
};

export default Boxes;
