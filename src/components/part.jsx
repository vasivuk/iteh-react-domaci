import React from "react";
import { GiTwoCoins } from "react-icons/gi";

const Part = ({ part, onBuy, onSell }) => {
  return (
    <div className="part">
      <h2 className="title">{part.title}</h2>
      <div className="content">
        <img src={part.image} alt="" />
        <p className="description">{part.description}</p>
      </div>
      <div className="sec-3">
        <div className="price">
          <GiTwoCoins className="price" />
          <span>{part.price}</span>
        </div>
        <div className="buttons">
          <button id="btn-buy" onClick={() => onBuy(part.id)}>
            Buy
          </button>
          <button id="btn-sell" onClick={() => onSell(part.id)}>
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
