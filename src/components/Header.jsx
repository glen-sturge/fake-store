import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-center">
        <img
          src={require("../images/globe.png")}
          alt="line drawing of globe"
          width="83px"
          height="83px"
        />
        <h1 id="h1">One United</h1>
      </div>
    </div>
  );
};

export default Header;
