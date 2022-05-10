import React from "react";
import Parts from "./parts";
import Money from "./money";

const MainSection = ({ parts, onBuy, onSell }) => {
  return (
    <div className="main-section">
      <Parts parts={parts} onBuy={onBuy} onSell={onSell} />
    </div>
  );
};

export default MainSection;
