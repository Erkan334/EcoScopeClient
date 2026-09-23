import { Link } from "react-router";
import LogoutButton from "./LogoutButton";
import { checkAuthentication } from "../services/AuthService";
import { useState, useEffect } from "react";
import LoginButton from "./LoginButton";

export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        async function handleAuthCheck() {
            const authenticated = await checkAuthentication();

            setIsLoggedIn(authenticated);
        }

        handleAuthCheck();
    }, []);

    return (
        <nav className="flex items-center justify-between border-b px-6 py-4">
            <Link to="/" className="text-xl font-bold">
                EcoScope
            </Link>

            <div className="flex items-center gap-4">

                {isLoggedIn ? <LogoutButton/> : <LoginButton/>}
            </div>
        </nav>
    );
}