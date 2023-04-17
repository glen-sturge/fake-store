import React from "react";

import "../App.css";

function Header() {
  return (
    <header className="header">
      <div className="header-center">
        <img
          src={require("../images/globe.png")}
          alt="line drawing of globe"
          width="83px"
          height="83px"
        />
        <h1 id="h1">One United</h1>
      </div>
    </header>
  );
}

export default Header;
