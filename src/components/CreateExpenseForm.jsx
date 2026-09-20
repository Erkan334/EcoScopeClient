import { createExpense } from "../services/ExpenseService";
import { useState } from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Typography } from "@mui/material";


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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <Typography variant="h3" className="text-center">Create Expense</Typography>

            <section className="w-full flex flex-col gap-4">

            {/* Title */}
            <TextField required id="title" type="text" label="Title" defaultValue={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex. Gym"></TextField>


            {/* Cost */}
            <TextField required id="costAmount" type="number" label="Cost" defaultValue={costAmount} onChange={(e) => setCostAmount(e.target.value)} placeholder="Ex. 250"></TextField>


            {/* Billing */}
            <FormControl fullWidth>
                <InputLabel id="billingFrequencyLabel">Billing frequency</InputLabel>
                <Select name="billingFrequency" value={billingFrequency} onChange={(e) => setBillingFrequency(e.target.value)} required labelId="billingFrequencyLabel" label="BillingFrequency">
                    <MenuItem value="0">OneTime</MenuItem>
                    <MenuItem value="1">Weekly</MenuItem>
                    <MenuItem value="2">Monthly</MenuItem>
                    <MenuItem value="3">Yearly</MenuItem>
                </Select>
            </FormControl>


            {/* Category */}
            <FormControl fullWidth>
                <InputLabel id="categoryLabel">Category</InputLabel>
                <Select name="categoryId" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required labelId="categoryLabel" label="Category">
                    <MenuItem value="1">Rent</MenuItem>
                    <MenuItem value="2">Groceries</MenuItem>
                    <MenuItem value="3">Transport</MenuItem>
                    <MenuItem value="4">Clothing</MenuItem>
                    <MenuItem value="5">Saving</MenuItem>
                    <MenuItem value="6">Miscellaneous</MenuItem>
                    <MenuItem value="7">Loan</MenuItem>
                    <MenuItem value="8">Subscription</MenuItem>
                </Select>
            </FormControl>

            </section>
            <Button variant="contained" type="submit" className="w-1/3 self-center">Create Expense</Button>

            
            
        </form>
    )
}