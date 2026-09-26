import { useState } from "react"
import { useNavigate } from "react-router";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { loginWithCookies, registerUser } from "../services/AuthService";
export default function RegisterForm(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        await registerUser(email, password);
        await loginWithCookies(email, password);
        navigate("/username");
    }
    
    return(
    <form onSubmit={handleSubmit}>
        <Box
            sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0f172a",
            px: 2,
            }}
        >
            <Card
            elevation={4}
            sx={{
                width: "100%",
                maxWidth: 420,
                borderRadius: 3,
            }}
            >
            <CardContent sx={{ p: 4 }}>
                <Typography
                variant="h4"
                component="h1"
                fontWeight={700}
                textAlign="center"
                gutterBottom
                >
                Register account
                </Typography>


                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eco@scope.com"
                    autoComplete="email"
                />

                <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    autoComplete="current-password"
                />

                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                    mt: 1,
                    py: 1.4,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    }}
                >
                    Register
                </Button>

                <Typography textAlign="center" variant="body2">
                    Already have an account?{" "}
                    <Link
                    href="/login"
                    underline="hover"
                    sx={{ fontWeight: 600 }}
                    >
                    Login
                    </Link>
                </Typography>
                </Box>
            </CardContent>
            </Card>
        </Box>
    </form>
    )
}