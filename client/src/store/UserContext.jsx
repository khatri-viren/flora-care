/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateUser = (userData) => {
    setUser(userData);
    setIsLoggedIn(!!userData); // Set isLoggedIn to true if userData is truthy (user is logged in)
  };

  useEffect(() => {
    // Check for the auth token in local storage
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      // If a token is found, fetch the user data
      axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;

      axios
        .get("http://localhost:4000/auth/local/getuser")
        .then((response) => {
          const userData = response.data;
          updateUser(userData);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, updateUser, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
