import { useEffect, useState } from "react";
import { getAllExpenses } from "../services/ExpenseService";

export function ExpenseList() {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        async function loadExpenses() {
            try {
                const data = await getAllExpenses();
                setExpenses(data);
            }
            catch (error) {
                console.log("Error getting expenses:", error);
            }
        }

        loadExpenses();
    }, []);

    function getBillingFrequency(frequency) {
        switch (frequency) {
            case 0:
                return "One-time";
            case 1:
                return "Weekly";
            case 2:
                return "Monthly";
            case 3:
                return "Yearly";
            default:
                return "Unknown";
        }
    }

    return (
        <div>
            <h2>My Expenses</h2>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Cost</th>
                        <th>Billing Frequency</th>
                        <th>Category</th>
                    </tr>
                </thead>

                <tbody>
                    {expenses.map(expense => (
                        <tr key={expense.id}>
                            <td>{expense.title}</td>
                            <td>{expense.costAmount} kr</td>
                            <td>{getBillingFrequency(expense.billingFrequency)}</td>
                            <td>{expense.categoryTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}