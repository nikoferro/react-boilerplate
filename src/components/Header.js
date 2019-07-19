import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = props => {
  return (
    <ul id="Header">
      {props.routes.map((item, i) => (
        <li key={`header-li-${i}`}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Header;
