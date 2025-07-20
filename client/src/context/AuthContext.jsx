import React, { useState, useEffect, createContext, useContext } from "react";
import api from "../config/api"; 
import { toast } from "react-hot-toast";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const res = await api.get("/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const userData = res.data.data;
      setUser(userData);
      setIsLogin(true);
      setIsAdmin(userData.role === "admin");
    } catch (error) {
      console.error("Failed to fetch user:", error);
      toast.error("Session expired");
      logout();
    } finally {
      setLoading(false);
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

  const value = {
    user,
    isLogin,
    isAdmin,
    loading,
    login,
    logout,
    fetchProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
