import { useState, ChangeEvent, useEffect, useMemo } from "react";
import { IData } from "./Expense";
import { GROCERIES, UTILITIES, ENTERTAINMENT, ALL } from '../categories';

interface Props {
  expenses: IData[];
  deleteExpense: (id: string) => void;
}

function DisplayExpense({ expenses, deleteExpense }: Props) {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  }

  const totalAmount = useMemo(() => {
    return filteredExpenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2);
  }, [filteredExpenses])

  useEffect(() => {
    // if(selectedCategory == ALL) setFilteredExpenses(expenses);
    // else setFilteredExpenses(expenses.filter(expense => expense.category === selectedCategory));
    setFilteredExpenses(
      selectedCategory === ALL
      ? expenses
      : expenses.filter(expense => expense.category === selectedCategory)
    );
  }, [selectedCategory, expenses])

  return (
    <div className="display-expenses-container mt-5">
      <select className="form-select mb-3" aria-label="Default select" onChange={handleSelect}>
        <option value={ALL}>All</option>
        <option value={GROCERIES}>Groceries</option>
        <option value={UTILITIES}>Utilities</option>
        <option value={ENTERTAINMENT}>Entertainment</option>
      </select>
      
      { filteredExpenses && 
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount (INR)</th>
              <th scope="col">Category</th>
              <th scope="col">&emsp;&emsp;&emsp;&emsp;</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredExpenses && filteredExpenses.map(({ id, description, amount, category }) => {
                return (
                  <tr key={id}>
                    <td>{description}</td>
                    <td>{amount.toFixed(2)}</td>
                    <td>{category}</td>
                    <td><button className="btn btn-outline-danger" onClick={() => deleteExpense(id)}>Delete</button></td>
                  </tr>
                );
              })
            }
          </tbody>
          <tfoot>
            <tr>  
              <td>Total</td>
              <td>{totalAmount}</td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      }
    </div>
  )
}

export default DisplayExpense;




/**
 * Note:
 * [].reduce((total, expense) => total + expense.amount, 0); => 0
 * This return 0, hence the totalAmount is returning 0 insted of throwing error when filteredExpenses is []
 */