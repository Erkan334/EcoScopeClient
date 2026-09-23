import { useState } from "react"
import { useNavigate } from "react-router";
import { createUsername } from "../services/UserService";

export default function CreateUsername(){
    
    const [name, setName] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        await createUsername(name);

        navigate("/")

        
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h1>Whats your name?</h1>

            <h2>Username</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="ex. Hugo"/>

            <button type="submit">Set name</button>
        </form>
    )
}