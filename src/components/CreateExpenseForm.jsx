import { createExpense } from "../services/ExpenseService";
import { useState } from "react";


export default function CreateExpenseForm(){

    const[title, setTitle] = useState("");
    const[costAmount, setCostAmount] = useState("");
    const[billingFrequency, setBillingFrequency] = useState("");
    const[categoryId, setCategoryId] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();
        
        try{
            const newExpense = {title, costAmount: parseFloat(costAmount), billingFrequency: parseInt(billingFrequency), categoryId: parseInt(categoryId)};
            await createExpense(newExpense);
            setTitle("");
            setCostAmount("");
            setBillingFrequency("");
            setCategoryId("");
        }
        catch(error){
            console.log("Error creating expense:", error)
        }
    }

    
    return(
        <form onSubmit={handleSubmit}>
            <h2>Title</h2>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex. Gym" required></input>

            <h2>Cost</h2>
            <input type="number" name="costAmount" value={costAmount} onChange={(e) => setCostAmount(e.target.value)} placeholder="Ex. 250" required></input>

            <h2>Billing frequency</h2>
            <select name="billingFrequency" value={billingFrequency} onChange={(e) => setBillingFrequency(e.target.value)} required>
                <option value="">Select billing frequency</option>
                <option value="0">OneTime</option>
                <option value="1">Weekly</option>
                <option value="2">Monthly</option>
                <option value="3">Yearly</option>
            </select>
            
            <h2>Category</h2>
            <select name="categoryId" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                <option value="">Select category</option>
                <option value="1">Rent</option>
                <option value="2">Groceries</option>
                <option value="3">Transport</option>
                <option value="4">Clothing</option>
                <option value="5">Saving</option>
                <option value="6">Miscellaneous</option>
                <option value="7">Loan</option>
                <option value="8">Subscription</option>
            </select>

            <button type="submit">Create Expense</button>
            
            
        </form>
    )
}