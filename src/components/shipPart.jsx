import React from "react";
import Levels from "./levels";

const ShipPart = ({ shipPart }) => {
  return (
    <div className="part">
      <h2 className="title">{shipPart.title}</h2>
      <div className="content">
        <img src={shipPart.image} alt="" />
        <p className="description">{shipPart.description}</p>
      </div>
      <Levels shipPart={shipPart} />
    </div>
  );
};

export default ShipPart;
