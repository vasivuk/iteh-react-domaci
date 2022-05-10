import React from "react";
import ShipPart from "./shipPart";

const Ship = ({ shipParts }) => {
  return (
    <div className="parts-container">
      {shipParts.map((shipPart) => (
        <ShipPart key={shipPart.id} shipPart={shipPart} />
      ))}
    </div>
  );
};

export default Ship;
