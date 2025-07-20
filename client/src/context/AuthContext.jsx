// AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../config/api"; // Axios instance
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await api.get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = res.data.data;
      setUser(userData);
      setIsLogin(true);
      setIsAdmin(userData.role === "admin");
    } catch (err) {
      toast.error("Session expired or invalid profile data");
      localStorage.removeItem("token");
      setIsLogin(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
    setIsLogin(true);
    setIsAdmin(userData.role === "admin");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLogin(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isLogin, isAdmin, login, logout, fetchProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
