import { useEffect, useState } from "react";
import { getAllExpenses } from "../services/ExpenseService";
import { removeExpense } from "../services/ExpenseService";

export function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [expenseId, setExpenseId] = useState("");

  useEffect(() => {
    async function loadExpenses() {
      try {
        const data = await getAllExpenses();
        setExpenses(data);
      } catch (error) {
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

  function handleRemove(expenseId) {
    console.log(" expense:", expenses);
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-4 flex flex-col align-center p-[2em]">
      <h2 className="text-2xl font-semibold mb-4 w-full text-center text-white">
        My Expenses
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full text-left">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-200">
                Title
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-200">
                Cost
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-200">
                Billing Frequency
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-200">
                Category
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {expenses.map((expense) => (
              <tr
                key={expense.id}
                className="hover:bg-gray-800/50 transition-colors"
              >
                <td className="px-6 py-4 text-gray-100">{expense.title}</td>

                <td className="px-6 py-4 text-gray-100">
                  {expense.costAmount} kr
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {getBillingFrequency(expense.billingFrequency)}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {expense.categoryTitle}
                </td>
                <button onClick={() => handleRemove(expense.id)}>Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
