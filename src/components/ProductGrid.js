import React from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
//import styles from "../styles/ProductCard.module.css";

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductGrid;
