import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen flex justify-center items-center">
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center",}}>
                <Typography sx={{color: "white", fontWeight: "bold"}}>
                    404
                </Typography>

                <Typography sx={{ color: "white"}} >
                    Page could not be found...
                </Typography>

                <Button onClick={() => navigate("/")} sx={{ color: "white", backgroundColor: "gray", "&:hover": {backgroundColor: "darkgray"}}} >
                    Back to Homepage
                </Button>
            </Box>
        </main>
    );
}

