import { Link } from "react-router";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton"
import { useAuth } from "../context/AuthContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function Navbar() {

    const { isLoggedIn, loading, isAdmin } = useAuth();

    const navigate = useNavigate();


    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-[#1e293b]">
            <Link to="/" className="text-xl font-bold text-white">
                EcoScope
            </Link>

            <div className="flex items-center gap-4">
                {isAdmin && (
                    <Button onClick={() => navigate("/admin")} sx={{color: "white"}}>Admin-Panel</Button>
                )}

                {!loading && (isLoggedIn ? <LogoutButton/> : <LoginButton/>)}
            </div>
        </nav>
    );
}