import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { logout } from "../services/AuthService";

export default function LogoutButton() {
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    return (
        <Button onClick={handleLogout}>
            Logout
        </Button>
    );
}