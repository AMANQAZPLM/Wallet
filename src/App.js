import React, { useState } from "react";
import NewExpense from "./components/Expenses/NewExpense";
import UserExpense from "./components/NewExpense/UserExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [changeExpenses, setChangeExpenses] = useState(DUMMY_EXPENSES);

  const SaveExpenseData = (expense) => {
    setChangeExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <UserExpense OnSaveExpenseDataApp={SaveExpenseData}></UserExpense>
      <NewExpense items={changeExpenses}></NewExpense>
    </div>
  );
}

export default App;
