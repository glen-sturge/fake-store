import React from "react";

const ProductGrid = () => {
  return (
    <div className="product-categories">
      <div className="product-grid">
        <div className="product-container">
          <div>Women's</div>
          <div>
            <img
              className="product-image"
              src={require("../images/Womens-Jacket.png")}
            ></img>
          </div>
          <div className="see-more-link">See More</div>
        </div>
        <div className="product-container">
          <div>Men's</div>
          <div>
            <img
              className="product-image"
              src={require("../images/Mens-Henley-Tee.png")}
            ></img>
          </div>
          <div className="see-more-link">See More</div>
        </div>
        <div className="product-container">
          <div>Jewelry</div>
          <div>
            <img
              className="product-image"
              src={require("../images/Diamond-Ring.png")}
            ></img>
          </div>
          <div className="see-more-link">See More</div>
        </div>
        <div className="product-container">
          <div>Electronics's</div>
          <div>
            <img
              className="product-image"
              src={require("../images/Large-Monitor.png")}
            ></img>
          </div>
          <div className="see-more-link">See More</div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
