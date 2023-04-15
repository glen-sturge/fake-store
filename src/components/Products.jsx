import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
import "../App.css";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      let response;
      if ((category = "all")) {
        response = await fetch(`https://fakestoreapi.com/products`);
      } else {
        response = await fetch(
          `https://fakestoreapi.com/products/category/${category}` //electronics, jewelery, ...get the others
        );
      }
      const data = await response.json();
      setProducts(data);
      console.log(products);
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
