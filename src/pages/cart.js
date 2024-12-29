import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { API_URL } from "@/utils/const";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const userId = localStorage.getItem("userId");
        // Assuming a JWT token is stored in localStorage or cookies
        const token = localStorage.getItem("token");

        if (token) {
          const response = await axios.get(`${API_URL}/cart/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setCartItems(response.data);
          setTotalPrice(
            response.data.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )
          );
        } else {
          router.push("/login"); // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleCheckout = () => {
    router.push("/checkout"); // Redirect to checkout page
  };

  return (
    <div className={styles.cartPage}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.cartItemImage}
              />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={styles.cartTotal}>
        <h3>Total: ${totalPrice}</h3>
        <button onClick={handleCheckout} className={styles.checkoutButton}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
