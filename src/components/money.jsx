import React from "react";
import { GiTwoCoins } from "react-icons/gi";

const Money = ({ money }) => {
  return (
    <div className="money-section">
      <GiTwoCoins />
      <span>
        <input type={"text"} value={money} readOnly></input>
      </span>
    </div>
  );
};

export default Money;
