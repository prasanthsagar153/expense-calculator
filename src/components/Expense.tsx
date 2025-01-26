import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import DisplayExpense from "./DisplayExpense";

export interface IData {
  id: string,
  description: string;
  amount: number;
  category: string;
};

function Expense() {
  const [expenses, setExpenses] = useState<IData[]>([]);
  const handleExpenses = (data: IData) => setExpenses(prevExpenses => [...prevExpenses, data]);

  const deletExpense = (expenseId: string | undefined) => {
    setExpenses(expenses.filter(e => e.id !== expenseId));
  }

  return (
    <>
      <ExpenseForm handleExpenses={handleExpenses} />
      <DisplayExpense expenses={expenses} deleteExpense={deletExpense} />
    </>
  )
}

export default Expense;


// HANDLE all the operations logic here.
// You can add the id in handleExpenses function itself, insted of add it on ExpenseForm