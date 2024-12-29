// src/pages/register.js
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { API_URL } from "@/utils/const";
import styles from "../styles/Auth.module.css";

const Register = () => {
  const [name, setName] = useState(""); // Add state for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        name, // Send name to the API
        email,
        password,
      });

      if (response.data) {
        setSuccess(true);
        setTimeout(() => router.push("/login"), 2000); // Redirect to login page after success
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Register error", err);
    }
  };

  return (
    <div className={styles.authContainer}>
      <h1>Register</h1>
      {success && (
        <p className={styles.successMessage}>
          Registration successful! Redirecting to login...
        </p>
      )}
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className={styles.formGroup}>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="/login" className={styles.link}>
          Login here
        </a>
      </p>
    </div>
  );
};

export default Register;
