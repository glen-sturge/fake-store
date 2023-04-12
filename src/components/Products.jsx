import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
import "../App.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="products-gallery">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
