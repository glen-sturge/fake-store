import React from "react";
import "../App.css";

const Product = ({ product }) => {
  const truncDesc = () => {
    return product.description.length > 120
      ? `${product.description.slice(0, 120)}...`
      : product.description;
  };

  return (
    <div className="product-card" style={{}}>
      <div className="product-title">
        <h3 style={{ marginBottom: "10px" }}>{product.title}</h3>
      </div>
      <div className="product-thumbnail">
        <img src={product.image} alt="Product" />
      </div>
      <div className="product-info">
        <p
          className="product-description" /*style={{ fontSize: "14px", marginBottom: "10px", height: "75px" }}*/
        >
          {truncDesc()}
        </p>
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
