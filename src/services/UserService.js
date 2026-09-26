import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

export async function createUsername(name){
    const response = await api.put("/users/me/name", {name});

    return response.data;
}


export const getAllUsers = async () => {
    const response = await api.get("users/all")

    return response.data;
}