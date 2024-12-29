import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Home.module.css";
import { API_URL } from "@/utils/const";
import NavBar from "../components/navBar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products`, {
        params: {
          page,
          limit: 5,
          search,
        },
      });

      const { products, totalPages } = response.data;
      setProducts(products);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to page 1 when a new search is performed
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <h1>Welcome to Our Store</h1>

        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={handleSearch}
          />
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className={styles.pagination}>
          <button onClick={handlePrevious} disabled={page === 1}>
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button onClick={handleNext} disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
