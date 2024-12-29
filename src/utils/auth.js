// Helper functions for JWT token management

// Get the token from localStorage (or cookies if you prefer)
export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

// Set the token in localStorage (or cookies if you prefer)
export const setAuthToken = (token) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
};

// Remove the token from localStorage (or cookies if you prefer)
export const removeAuthToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
};
