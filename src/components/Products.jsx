import React from "react";
import Product from "./Product";
import "../App.css";

const Products = ({ products, setProduct, setCategory }) => {
  const handleChange = (e) => {
    // console.log(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <div className="products-gallery-wrapper">
      <div className="products-gallery">
        <div className="products-select">
          <select className="select-category" onChange={handleChange}>
            <option value="all">- All -</option>
            <option value="electronics">- Electronics -</option>
            <option value="jewelery">- Jewelry -</option>
            <option value="women's clothing">- Women's clothing -</option>
            <option value="men's clothing">- Men's clothing -</option>
          </select>
        </div>

        {products.map((product) => (
          <Product key={product.id} setProduct={setProduct} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
