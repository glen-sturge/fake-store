import React from "react";

const SaleBanner = () => {
  return (
    <div>
      <div className="sale-text-wrapper">
        <h2 className="sale-text">THIS WEEKS TOP SELLERS!</h2>
        <h2 className="sale-text2">
          <i>Shop now before they are gone!</i>
        </h2>
      </div>
      <div className="sale-items">
        <div>
          <img
            className="backpack-image"
            src={require("../images/BackPackImage.png")}
          ></img>
        </div>
        <div>
          <img
            className="dragon-bracelet-image"
            src={require("../images/Dragon-Bracelet-Image.png")}
          ></img>
        </div>
        <div>
          <img
            className="monitor-image"
            src={require("../images/Monitor-Image.png")}
          ></img>
        </div>
      </div>
      <div className="shop-now-link">SEE MORE</div>
    </div>
  );
};

export default SaleBanner;
