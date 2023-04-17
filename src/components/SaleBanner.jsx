import React from "react";

const SaleBanner = () => {
  return (
    <div>
      <div className="sale-text-wrapper">
        <h2 className="sale-text">THIS WEEK ONLY...</h2>
        <h2 className="discount-amount">50%</h2>
        <div className="sale-text-small">off</div>
        <h2 className="sale-text2">ALL SALE ITEMS!</h2>
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
      <div className="shop-now-link">SHOP NOW</div>
    </div>
  );
};

export default SaleBanner;
