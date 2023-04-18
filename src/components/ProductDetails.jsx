import React from "react";
import Product from "./Product";
import { useState } from "react";
import { useEffect } from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <div className="back-link">&#60; Back</div>
      <div className="product-title2">{product.title}</div>
      <br />
      <div className="product-image-container">
        <img src={product.image} alt="Product" width="300px" />
      </div>
      <p className="product-detail-description">{product.description}</p>
      <div className="purchase-container">
        <div className="size-quantity-wrapper">
          <div className="size-container">
            <div className="size">Size:</div>
            {/* <div className="dropdown-size"> */}
            <select className="quantity-select">
              <option className="quantity-option">Extra-Small</option>
              <option className="quantity-option">Small</option>
              <option className="quantity-option">Medium</option>
              <option className="quantity-option">Large</option>
              <option className="quantity-option">Extra-Large</option>
            </select>
            {/* </div> */}
          </div>
          <div className="size-container">
            <div className="size">Quantity:</div>
            {/* <div className="quantity-picker"> */}
            <input
              type={"number"}
              placeholder="1"
              min={"1"}
              max={"10"}
              className="product-quantity"
            ></input>
            {/* </div> */}
          </div>
        </div>
        <div className="product-details-price">$9.99</div>
        <div className="add-cart-btn-container">
          <button className="add-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
