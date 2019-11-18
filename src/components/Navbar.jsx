import React from "react";
import "../sass/navbar.scss";
export default function Navbar({ darkMode, handlechanceColor }) {
  return (
    <nav>
      <div className="container">
        <h1>Where in the world?</h1>
        <h2 className="icon">
          <i
            className={darkMode ? "fas fa-moon" : "far fa-moon"}
            onClick={() => handlechanceColor()}
          >
            {"  "}
            Dark Mode
          </i>
        </h2>
      </div>
    </nav>
  );
}
