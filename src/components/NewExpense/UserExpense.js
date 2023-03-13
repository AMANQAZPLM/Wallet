import React, { useState } from "react";
import "./UserExpense.css";
import ExpenseForm from "./ExpenseForm";

function UserExpense(props) {
  const [ExpensesCond, setExpensesCond] = useState(false);

  const saveExpensDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };

    props.OnSaveExpenseDataApp(expenseData);
    setExpensesCond(false);
  };

  const ExpensesCondHandler = () => {
    setExpensesCond(false);
  };
  let addExpensesCond;

  const AddExpensesbtnhandler = () => {
    setExpensesCond(true);
  };

  addExpensesCond = (
    <button onClick={AddExpensesbtnhandler}>Add Expense</button>
  );
  if (ExpensesCond === true) {
    addExpensesCond = (
      <ExpenseForm
        onSaveExpenseData={saveExpensDataHandler}
        onExpenseCond={ExpensesCondHandler}
      />
    );
  }

  return (
    <div className="new-expense">
      {addExpensesCond}
      {/* custom component child to parent communication */}
    </div>
  );
}

export default UserExpense;
