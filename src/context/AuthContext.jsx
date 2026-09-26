import { createContext, useContext, useEffect, useState } from "react";
import { checkAuthentication, loginWithCookies, logout as logoutUser } from "../services/AuthService";
import { getUserRole } from "../services/AuthService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        async function checkAuth() {
            const authenticated = await checkAuthentication();

            setIsLoggedIn(authenticated);

            if (authenticated) {
                const role = await getUserRole();
                setIsAdmin(role.isAdmin);
            }

            setLoading(false);
        }

        checkAuth();
    }, []);

    async function login(email, password) {
        await loginWithCookies(email, password);
        setIsLoggedIn(true);

        const role = await getUserRole();
        setIsAdmin(role.isAdmin);
    }

    async function logout() {
        await logoutUser();
        setIsLoggedIn(false);
        setIsAdmin(false);
    }

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, loading, isAdmin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

