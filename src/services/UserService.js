import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

export async function createUsername(name){
    await api.put("/users/me/name", {name});
}