import React from "react";
import { Link } from "react-router-dom";

// Component for the homepage featured or sale items.

const SaleBanner = () => {
  return (
    <div className="sale-banner-wrapper">
      <div className="sale-banner">
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
              alt="backpack"
            ></img>
          </div>
          <div>
            <img
              className="dragon-bracelet-image"
              src={require("../images/Dragon-Bracelet-Image.png")}
              alt="dragon-bracelet"
            ></img>
          </div>
          <div>
            <img
              className="monitor-image"
              src={require("../images/Monitor-Image.png")}
              alt="monitor"
            ></img>
          </div>
        </div>
        <Link to="/featured" className="shop-now-link">
          SEE MORE
        </Link>
      </div>
    </div>
  );
};

export default SaleBanner;
