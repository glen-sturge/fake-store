import React from "react";
import { Link } from "react-router-dom";

// Component to display the product category grid on the home page.

const ProductGrid = ({ setCategory }) => {
  // Directs the user to the Men's Clothing Category.
  const handleMensClick = () => {
    setCategory("men's clothing");
  };

  // Directs the user to the Women's Clothing Category.
  const handleWomenClick = () => {
    setCategory("women's clothing");
  };

  // Directs the user to the Electronics's Category.
  const handleElectronicsClick = () => {
    setCategory("electronics");
  };

  // Directs the user to the Jewlery Category.
  const handleJewelryClick = () => {
    setCategory("jewelery");
  };
  return (
    <div className="product-categories">
      <div className="product-grid">
        <Link to="/shop" onClick={handleWomenClick}>
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
        </Link>
        <Link to="/shop" onClick={handleMensClick}>
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
        </Link>
        <Link to="/shop" onClick={handleJewelryClick}>
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
        </Link>
        <Link to="/shop" onClick={handleElectronicsClick}>
          <div className="product-container">
            <div>Electronics</div>
            <div>
              <img
                className="product-image"
                src={require("../images/Large-Monitor.png")}
              ></img>
            </div>
            <div className="see-more-link">See More</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductGrid;
