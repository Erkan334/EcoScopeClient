import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

export const getAllExpenses = async () => {
    const response = await api.get("expenses/all")

    return response.data;
}

export const createExpense = async (expense) => {
    const response = await api.post("expenses/create", expense);

    return response.data;
}

export const removeExpense = async (expenseId) => {
    const response = await api.delete(`expenses/${expenseId}/remove`);

    return response.data;
}

export const updateExpense = async (expenseId, expense) => {
    const response = await api.put(`expenses/${expenseId}/update`, expense);

    return response.data;
}