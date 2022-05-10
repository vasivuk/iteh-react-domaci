import React from "react";
import Level from "./level";

const Levels = ({ shipPart }) => {
  let levels = [];
  for (let i = 0; i < shipPart.maxlevel; i++) {
    if (shipPart.level > i) {
      levels.push(<Level acquired={1} />);
    } else {
      levels.push(<Level acquired={0} />);
    }
  }
  return (
    <table className="levels">
      <tr>{levels}</tr>
    </table>
  );
};

export default Levels;
