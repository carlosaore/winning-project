import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <ul className="header">
        <li className="header-item">
          <Link to="/">Home</Link>
        </li>
        <li className="header-item">
          <Link to="/Page1">PAGE1</Link>
        </li>
        <li className="header-item">
          <Link to="/Page2">PAGE2</Link>
        </li>
        <li className="header-item">
          <Link to="/Page3">PAGE3</Link>
        </li>
      </ul>
    </div>
  );
}
