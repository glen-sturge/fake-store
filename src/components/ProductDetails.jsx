import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details-wrapper">
      <div className="product-details">
        <div className="back-link">
          <Link to="/shop">&#60; Back</Link>
        </div>
        <div className="product-title2">{product.title}</div>
        <div className="product-image-container">
          <img src={product.image} alt="Product" width="300px" />
        </div>
        <p className="product-detail-description">{product.description}</p>
        <div className="purchase-container">
          <div className="size-quantity-wrapper">
            <div className="size-container">
              <div className="size">Size:</div>
              {/* <div className="dropdown-size"> */}
              <select className="size-select">
                <option className="size-option">Extra-Small</option>
                <option className="size-option">Small</option>
                <option className="size-option">Medium</option>
                <option className="size-option">Large</option>
                <option className="size-option">Extra-Large</option>
              </select>
              {/* </div> */}
            </div>
            <div className="size-container">
              <div className="size">Quantity:</div>
              <input
                type={"number"}
                placeholder="1"
                min={"1"}
                max={"10"}
                className="product-quantity"
              ></input>
            </div>
          </div>
          <div className="product-details-price">
            ${product.price.toFixed(2)}
          </div>
          <div className="add-cart-btn-container">
            <button className="add-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
