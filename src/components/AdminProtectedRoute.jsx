import { Navigate } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useAuth } from "../context/AuthContext";


export default function AdminProtectedRoute({children}){
    const {isLoggedIn, loading, isAdmin} = useAuth();


    if(loading){
        return <Box className="w-full min-h-screen flex justify-center items-center">
                    <CircularProgress aria-label="Loading…" />
                </Box>
    }

    if(!isLoggedIn){
        return <Navigate to="/login"/>
    }

    if(!isAdmin){
        return <Navigate to="/"/>
    }
    console.log("ADMIN CHECK:", isLoggedIn, loading, isAdmin);


    return children;

}