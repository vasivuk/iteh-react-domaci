import React from "react";
import { GiPirateCannon } from "react-icons/gi";

const Component = () => {
  return (
    <div className="component">
      <h2 className="title">Component</h2>
      <GiPirateCannon />
      <p className="description">This is a standard template component</p>
      <div className="buttons">
        <button>Buy</button>
        <button>Sell</button>
      </div>
    </div>
  );
};

export default Component;
