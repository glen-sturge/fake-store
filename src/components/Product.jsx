import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Product = ({ product, setProduct }) => {
  const truncDesc = () => {
    return product.description.length > 120
      ? `${product.description.slice(0, 120)}...`
      : product.description;
  };

  const handleClick = () => {
    setProduct(product);
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
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
