import React from "react";
import Components from "./components";
import Money from "./money";

const MainSection = () => {
  return (
    <div className="main-section">
      <Money />
      <Components />
    </div>
  );
};

export default MainSection;
