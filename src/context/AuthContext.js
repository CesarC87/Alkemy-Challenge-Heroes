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
        setTimeout(()=>{
          console.log('userIn: true y isLoggedIn ', isLoggedIn);
        }, 2000)
      }
    }
    if (!userIn) {
      setIsLoggedIn(false);
      setTimeout(()=>{
        console.log('userIn: false y isLoggedIn ', isLoggedIn);
      }, 2000)
    }
  }, [userIn]);

  const loggedIn = () => {
    localStorage.setItem("email", process.env.REACT_APP_USER_EMAIL);
    localStorage.setItem("password", process.env.REACT_APP_USER_PASS);
    setUserIn(true);
    
  };
  const loggedOut = () => {
    localStorage.removeItem("email", process.env.REACT_APP_USER_EMAIL);
    localStorage.removeItem("password", process.env.REACT_APP_USER_PASS);
    setUserIn(false);
    
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, loggedIn, loggedOut }}>
      {children}
    </AuthContext.Provider>
  );
};
