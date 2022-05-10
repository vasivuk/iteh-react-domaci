import React from "react";
import Part from "./part";

const Parts = ({ parts, onBuy, onSell }) => {
  return (
    <div className="parts-container">
      {parts.map((part) => (
        <Part key={part.id} part={part} onBuy={onBuy} onSell={onSell} />
      ))}
    </div>
  );
};

export default Parts;
