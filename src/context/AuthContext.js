import { createContext } from "react";
import { useState , useEffect} from "react";

export const AuthContext = createContext()

export const AuthProvider = ( { children } ) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const emailToken = localStorage.getItem('email')
    const passwordToken = localStorage.getItem('password')
    const [userIn, setUserIn] = useState(false)

     
    useEffect(()=>{
      if(userIn){
        if(emailToken === process.env.REACT_APP_USER_EMAIL && passwordToken === process.env.REACT_APP_USER_PASS){
          setIsLoggedIn(true)
          console.log(isLoggedIn);      }
      }
        
    }, [emailToken,passwordToken,isLoggedIn, userIn])

    const loggedIn = () => {
      localStorage.setItem('email', process.env.REACT_APP_USER_EMAIL)
      localStorage.setItem('password', process.env.REACT_APP_USER_PASS)      
      setUserIn(true)  
    }      
       
    return (
        <AuthContext.Provider
          value={{isLoggedIn, loggedIn}}>{children} 
        </AuthContext.Provider>
      );
}
