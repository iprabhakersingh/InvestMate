import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", null); 
  const navigate = useNavigate();

  const login = async (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);    
    localStorage.setItem("token", jwtToken);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    setToken(null); 
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const value = {
      user,
      token,
      login,
      logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
