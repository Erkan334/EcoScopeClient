import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

export const createExpense = async (expense) => {
    const response = await api.post("expenses/create", expense);

    return response.data;
}