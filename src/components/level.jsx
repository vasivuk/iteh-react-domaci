import React from "react";

const Level = ({ acquired }) => {
  console.log(acquired == 1);
  if (acquired == 1) {
    return <td className="level acquired"></td>;
  } else {
    return <td className="level"></td>;
  }
};

export default Level;
