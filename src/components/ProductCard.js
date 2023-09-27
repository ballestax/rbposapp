import React from "react";
import styles from "../styles/ProductCard.module.css";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

const ProductCard = ({ product, onQuickAddClick, onNormalAddClick }) => {
  return (
    <div className={styles.productCard}>
      <img
        src={defaultImage}
        alt={product.name}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{product.name.toUpperCase()}</h2>
        <p className={styles.productCategory}>
          <em>{product.category.name}</em>
        </p>
        <p className={styles.productPrice}>${parseFloat(product.price)}</p>
      </div>
      <div className={styles.productActions}>
        <button
          onClick={() => onQuickAddClick(product)}
          className={styles.quickAddButton}
        >
          <FontAwesomeIcon icon={faAdd} size="1x" color="blue" />
        </button>
        <button
          onClick={() => onNormalAddClick(product)}
          className={styles.normalAddButton}
        >
          <FontAwesomeIcon icon={faAdd} size="1x" color="green" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
