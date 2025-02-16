import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context for the user
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initialize user state from localStorage if available
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Effect to persist user data in localStorage whenever the user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user)); // Save user data to localStorage
    } else {
      localStorage.removeItem("user"); // Remove user data from localStorage if logged out
    }
  }, [user]); // Trigger this effect whenever the user state changes

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the user context
export const useUser = () => useContext(UserContext);
// Export UserContext if needed
export { UserContext };