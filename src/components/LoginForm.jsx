import { useState } from "react"
import { loginWithCookies } from "../services/AuthService";
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

export default function LoginForm(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        await loginWithCookies(email, password);

        navigate("/home");
    }
    
    return(
    <form onSubmit={handleSubmit}>
        <Box
            sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f7fa",
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
                Log in
                </Typography>

                <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                sx={{ mb: 3 }}
                >
                Log in to your account
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
                    Log in
                </Button>

                <Typography textAlign="center" variant="body2">
                    Don't have an account?{" "}
                    <Link
                    href="/register"
                    underline="hover"
                    sx={{ fontWeight: 600 }}
                    >
                    Register
                    </Link>
                </Typography>
                </Box>
            </CardContent>
            </Card>
        </Box>
    </form>
    )
}