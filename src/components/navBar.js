import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { setAuthToken, getAuthToken, removeAuthToken } from "../utils/auth";

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove the JWT token and set the authentication state to false
    removeAuthToken();
    setIsAuthenticated(false);
    router.push("/login"); // Redirect to login page
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/cart" className={styles.navLink}>
          Cart
        </Link>
        <Link href="/orders" className={styles.navLink}>
          Orders
        </Link>
      </div>

      <div className={styles.authSection}>
        {isAuthenticated ? (
          <div className={styles.dropdown}>
            <button className={styles.dropdownButton} onClick={toggleDropdown}>
              Profile
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <button onClick={handleLogout} className={styles.dropdownItem}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login" className={styles.navLink}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
