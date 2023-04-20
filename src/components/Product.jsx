import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Product = ({ product, setProduct }) => {
  //cuts down long descriptions for the product cards.
  const truncDesc = () => {
    return product.description.length > 120
      ? `${product.description.slice(0, 120)}...`
      : product.description;
  };

  //for productDetails
  const handleClick = () => {
    setProduct(product);
  };

  // no cart :(
  const handleAdd = () => {
    alert("Site is still under construction.");
  };

  return (
    <div className="product-card">
      <div className="product-title">
        <h3>{product.title}</h3>
      </div>
      <Link to="/product" onClick={handleClick}>
        <div className="product-thumbnail">
          <img src={product.image} alt="Product" />
        </div>
      </Link>
      <div className="product-info">
        <p className="product-description">{truncDesc()}</p>
        <p>
          <strong>Rating:</strong> {product.rating.rate}/5 (
          {product.rating.count} ratings)
        </p>
        <p className="product-price">Price: ${product.price.toFixed(2)}</p>
      </div>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default Product;
