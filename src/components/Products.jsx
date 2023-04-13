import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
import "../App.css";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      if ((category = "all")) {
        const response = await fetch(`https://fakestoreapi.com/products`);
      } else {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
      }
      const data = await response.json();
      setProducts(data);
      console.log(products);
    }

    fetchProducts();
  }, [category]);

  return (
    <div className="products-gallery">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
