import React from "react";
import Product from "./Product";
import "../App.css";

const Products = ({ products }) => {
  return (
    <div className="products-gallery">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
