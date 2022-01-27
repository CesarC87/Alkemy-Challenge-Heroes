import { createContext } from "react";
import { useState , useEffect} from "react";

export const AuthContext = createContext()

export const AuthProvider = ( { children } ) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const emailToken = localStorage.getItem('email')
    const passwordToken = localStorage.getItem('password')

     
    useEffect(()=>{
        if(emailToken === process.env.REACT_APP_USER_EMAIL && passwordToken === process.env.REACT_APP_USER_PASS){
            setIsLoggedIn(true)
            console.log(isLoggedIn);
        }
    }, [emailToken,passwordToken,isLoggedIn])
    
       
    return (
        <AuthContext.Provider
          value={{isLoggedIn}}>{children} 
        </AuthContext.Provider>
      );
}
