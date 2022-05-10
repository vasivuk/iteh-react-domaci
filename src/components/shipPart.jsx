import React from "react";

const Part = ({ shipPart }) => {
  return (
    <div className="part">
      <h2 className="title">{shipPart.title}</h2>
      <div className="content">
        <img src={shipPart.image} alt="" />
        <p className="description">{shipPart.description}</p>
      </div>
      <div className="level">x{shipPart.level}</div>
    </div>
  );
};

export default Part;
