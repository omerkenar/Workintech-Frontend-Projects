import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUserInfo, setAuthUserInfo] = useState(null);
  const [token, setToken] = useLocalStorage("s11d2", null);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "https://nextgen-project.onrender.com/api/s11d2/login",
        {
          username,
          password,
        }
      );
      setToken(response.data.token);
      setAuthUserInfo(response.data.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  const logout = () => {
    setToken(null);
    setAuthUserInfo(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, authUserInfo, token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
