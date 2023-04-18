import React from "react";
import Product from "./Product";
import "../App.css";

const Products = ({ products, setProduct }) => {
  return (
    <div className="products-gallery">
      {products.map((product) => (
        <Product key={product.id} setProduct={setProduct} product={product} />
      ))}
    </div>
  );
};

export default Products;
