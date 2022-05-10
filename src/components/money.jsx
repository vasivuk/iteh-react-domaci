import React from "react";
import { GiTwoCoins } from "react-icons/gi";

const Money = () => {
  return (
    <div className="money-section">
      <GiTwoCoins />
      <span>
        <input type={"text"} value={1000000}></input>
      </span>
    </div>
  );
};

export default Money;
