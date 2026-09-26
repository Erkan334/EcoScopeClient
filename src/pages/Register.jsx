import { useState } from "react"
import { registerUser } from "../services/AuthService";
import { useNavigate } from "react-router";
import RegisterForm from "../components/RegisterForm";

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

        <RegisterForm />
    )
}