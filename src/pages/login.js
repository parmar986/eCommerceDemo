// src/pages/login.js
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { API_URL } from "@/utils/const";
import styles from "../styles/Auth.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      if (response.data.token) {
        const { userId, name, email } = response.data; // Assuming this is the response format
        localStorage.setItem("userId", userId);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("token", response.data.token); // Store JWT token in localStorage
        router.push("/"); // Redirect to home page after successful login
      }
    } catch (err) {
      setError("Invalid email or password.");
      console.error("Login error", err);
    }
  };

  return (
    <div className={styles.authContainer}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="/register" className={styles.link}>
          Register here
        </a>
      </p>
    </div>
  );
};

export default Login;
