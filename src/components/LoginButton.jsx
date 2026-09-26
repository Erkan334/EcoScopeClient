import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

export default function LoginButton() {
    const navigate = useNavigate();


    return (
        <Button onClick={() => navigate("/login")} sx={{color: "white"}}>
            Login
        </Button>
    );
}