import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AuthRequired = () => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/'  /> 
    );
}

export default AuthRequired

// state={{ from: location }} replace