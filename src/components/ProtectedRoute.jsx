import { useState, useEffect } from "react";
import { checkAuthentication } from "../services/AuthService";
import { Navigate } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function ProtectedRoute({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {

        async function checkAuth(){
            const authenticated = await checkAuthentication();

            setIsAuthenticated(authenticated);
        }

        checkAuth();

    }, []);


    if(isAuthenticated === null){
        return <Box className="w-full min-h-screen flex justify-center items-center">
                    <CircularProgress aria-label="Loading…" />
                </Box>
    }

    if(isAuthenticated === false){
        return <Navigate to="/login"/>
    }


    return children;

}