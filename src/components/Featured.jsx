import React from "react";

const Featured = () => {
  return (
    <div className="featured-page">
      <h1 className="featured-title">Featured Items</h1>
      <h2 className="featured-subtitle">This week's top sellers!</h2>
      <div className="feat-container">
        <div className="feat-image">
          <img src={require("../images/BackPackImage.png")}></img>
        </div>
        <div className="feat-description">
          <div className="feat-item-title">
            <h3>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
          </div>
          <div className="feat-item-descp">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </div>
          <div className="times-purchased">
            <img src={require("../images/Trending-Up.png")} />
            Purchased <i>142</i> &nbsp;times this week!
          </div>
        </div>
      </div>
      <div className="feat-container">
        <div className="feat-description2">
          <div className="feat-item-title">
            <h3>
              John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
              Bracelet
            </h3>
          </div>
          <div className="feat-item-descp2">
            From our Legends Collection, the Naga was inspired by the mythical
            water dragon that protects the ocean's pearl. Wear facing inward to
            be bestowed with love and abundance, or outward for protection.
          </div>
          <div className="times-purchased">
            <img src={require("../images/Trending-Up.png")} />
            Purchased <i>64</i> &nbsp;times this week!
          </div>
        </div>
        <div className="feat-image">
          <img src={require("../images/Dragon-Bracelet-Image.png")}></img>
        </div>
      </div>
      <div className="feat-container">
        <div className="feat-image">
          <img src={require("../images/Large-Monitor.png")}></img>
        </div>
        <div className="feat-description3">
          <div className="feat-item-title">
            <h3>
              Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
            </h3>
          </div>
          <div className="feat-item-descp3">
            21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon
            free Sync technology. No compatibility for VESA Mount Refresh Rate:
            75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response
            time | IPS panel Aspect ratio - 16: 9.
          </div>
          <div className="times-purchased">
            <img src={require("../images/Trending-Up.png")} />
            Purchased <i>55</i> &nbsp;times this week!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
