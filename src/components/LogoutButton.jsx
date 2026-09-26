import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function LogoutButton() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    async function handleLogout() {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    return (
        <Button onClick={handleLogout} sx={{color: "white", }}>
            Logout
        </Button>
    );
}