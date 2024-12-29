import React from "react";
import axios from "axios";
import styles from "../../styles/ProductDetail.module.css";
import { API_URL } from "@/utils/const";

const ProductDetails = ({ product }) => {
  if (!product) return <h1>Loading...</h1>;

  const handleAddToCart = () => {
    // Add to cart functionality
    alert("Item added to cart");
  };

  return (
    <div className={styles.productDetail}>
      {/* Product Image */}
      <img
        className={styles.productImage}
        src={product.image}
        alt={product.name}
      />

      {/* Product Details */}
      <div className={styles.productDetails}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>

        <div className={styles.productCategory}>
          <span>Category:</span> {product.category}
        </div>

        <div className={styles.productStock}>
          <span>Stock:</span>{" "}
          {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
        </div>

        <div className={styles.price}>${product.price.toFixed(2)}</div>

        {/* Add to Cart Button */}
        <div className={styles.addToCartContainer}>
          {product.stock > 0 ? (
            <button className={styles.button} onClick={handleAddToCart}>
              Add to Cart
            </button>
          ) : (
            <div className={styles.stockOut}>Out of Stock</div>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params; // This gets the dynamic "id" parameter from the URL

  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return {
      props: { product: response.data },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      notFound: true, // If the product is not found, return a 404
    };
  }
}

export default ProductDetails;
