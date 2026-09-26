import { useState } from "react"
import { useNavigate } from "react-router";
import { createUsername } from "../services/UserService";
import { TextField, Button, Box, Card, CardContent, Typography, Link } from "@mui/material";


export default function CreateUsername(){
    
    const [name, setName] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        await createUsername(name);
        navigate("/home")

    }
    
    return(
        <main className="w-full flex flex-col justify-center items-center border border-solid bg-[#0f172a]">
            <form onSubmit={handleSubmit}>
                <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>

                        <Card elevation={4} sx={{ width: "100%", maxWidth: 420, borderRadius: 3,}}>

                            <CardContent sx={{ p: 4 }}>

                                <Typography variant="h4" component="h1" fontWeight={700} textAlign="center" gutterBottom >
                                Whats your name?
                                </Typography>

                                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>

                                    <TextField fullWidth type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="ex. John..."/>

                            

                                    <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 1, py: 1.4, borderRadius: 2, textTransform: "none", fontSize: "1rem", fontWeight: 600, }}>
                                    Continue
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                </Box>
            </form>

        </main>
    )
}