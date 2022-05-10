import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiSailboat } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="nav-item">
          <Link to={"/"}>
            <AiFillHome />
            <p>Home</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/ship"}>
            <GiSailboat />
            <p>Ship</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
