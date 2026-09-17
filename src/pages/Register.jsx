import { useState } from "react"
import { registerUser } from "../services/AuthService";
import { useNavigate } from "react-router";

export default function Register(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        await registerUser(email, password);

        navigate("/username")

        
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>

            <h2>Email</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="eco@scope.com"/>

            <h2>Password</h2>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>

            <button type="submit">Register</button>
        </form>
    )
}