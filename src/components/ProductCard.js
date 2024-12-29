import React from "react";
import styles from "../styles/ProductCard.module.css";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const router = useRouter(); // Initialize the router

  // Navigate to the product details page when the card is clicked
  const handleCardClick = () => {
    router.push(`/products/${product._id}`); // Navigate to the product details page
  };
  const handleAddToCart = () => {
    // Add product to cart
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <img className={styles.productImage} src={product.image} loading="lazy" />
      <div className={styles.cardContent}>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.price}>Price: ${product.price.toFixed(2)}</p>
        <p className={styles.category}>{product.category}</p>
      </div>
      <div className={styles.actions}>
        {product.stock > 0 ? (
          <button className={styles.addToCartBtn}>Add to Cart</button>
        ) : (
          <span className={styles.outOfStock}>Out of Stock</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
