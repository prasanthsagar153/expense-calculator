# Expense Calculator  

An Expense Calculator application built using **React**, **TypeScript**, **Bootstrap**, **react-hook-form**, and **zod**. This app allows users to categorize their expenses and track them efficiently. The goal is to get the basic understanding of **React + Typescript**

## Features  

- **Add Expenses**: Add expense entries with categories, amounts, and descriptions.  
- **Categorization**: Group expenses by custom categories.  
- **Validation**: Robust form validation using `react-hook-form` and `zod`.  
- **Responsive Design**: Styled with Bootstrap for a seamless experience on all devices.

## Technologies Used

- React: Component-based UI framework.
- TypeScript: Strongly typed language for JavaScript.
- Bootstrap: CSS framework for responsive design.
- react-hook-form: Library for managing form state and validation.
- zod: Schema-based validation for form inputs.

## Project Structure

```plaintext
src/
├── components/
│   ├── ExpenseForm.tsx       # Form for adding new expenses
│   ├── DisplayExpense.tsx    # Displays list of expenses
│   └── Expense.tsx           # Main expense component
├── App.tsx                # Main app component
├── main.tsx              # Application entry point

```


## Installation  

Follow these steps to set up the application on your local machine:  

### Prerequisites  

- Node.js (>=16.0.0)  
- npm or yarn  

### Clone the Repository  

```bash  
git clone https://github.com/prasanthsagar153/expense-calculator.git  
cd expense-calculator  
