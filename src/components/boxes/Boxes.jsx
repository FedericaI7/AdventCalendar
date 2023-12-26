import "./index.css";
import data from "/src/data.json";
import Box from "../box/Box";
import { useState } from "react";

const Boxes = () => {
  const [gift, setGift] = useState("");

  const result = data.map((x) => <Box giftToday={x.gift} key={x.id} />);

  const sendGift = (value) => {
    console.log(value);
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




      <button className="box box__1" onClick={sendGift}>
        1
      </button>
      {/* <button className="box box__2" onClick={sendGift}>
        2
      </button>
      <button className="box box__3" onClick={sendGift}>
        3
      </button>
      <button className="box box__4" onClick={sendGift}>
        4
      </button>
      <button className="box box__5" onClick={sendGift}>
        5
      </button>
      <button className="box box__6" onClick={sendGift}>
        6
      </button>
      <button className="box box__7" onClick={sendGift}>
        7
      </button>
      <button className="box box__8" onClick={sendGift}>
        8
      </button> */}
    </div>
  );
};

export default Boxes;
