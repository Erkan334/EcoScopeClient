import { useState } from "react"
import { loginWithCookies } from "../services/AuthService";
import { useNavigate } from "react-router";

export default function Login(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        await loginWithCookies(email, password);

        navigate("/");
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <h2>Email</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="eco@scope.com"/>

            <h2>Password</h2>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>

            <button type="submit">Login</button>
        </form>
    )
}