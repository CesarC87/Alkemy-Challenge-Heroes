import { createContext } from "react";
import { useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const emailToken = localStorage.getItem("email");
  const passwordToken = localStorage.getItem("password");
  const [userIn, setUserIn] = useState(false);

  useEffect(() => {
    if (userIn) {
      if (
        emailToken === process.env.REACT_APP_USER_EMAIL &&
        passwordToken === process.env.REACT_APP_USER_PASS
      ) {
        setIsLoggedIn(true);        
      }
    }
    if (!userIn) {
      setIsLoggedIn(false);
    }
  }, [userIn, isLoggedIn, emailToken, passwordToken]);

  const loggedIn = () => {
    localStorage.setItem("email", process.env.REACT_APP_USER_EMAIL);
    localStorage.setItem("password", process.env.REACT_APP_USER_PASS);
    setUserIn(true);
    console.log(userIn);
  };
  const loggedOut = () => {
    localStorage.removeItem("email", process.env.REACT_APP_USER_EMAIL);
    localStorage.removeItem("password", process.env.REACT_APP_USER_PASS);
    setUserIn(false);
    setTimeout(() => {
      console.log(isLoggedIn);
    }, 2000);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, loggedIn, loggedOut }}>
      {children}
    </AuthContext.Provider>
  );
};
