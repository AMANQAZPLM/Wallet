import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./NewExpense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function NewExpense(props) {
  const [filterYear, SetFilterYear] = useState("2020");

  const onchangeYearHandler = (changedYear) => {
    SetFilterYear(changedYear);
  };

  const filteredYear = props.items.filter(function (expenses) {
    return expenses.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          YearChangeHandler={onchangeYearHandler}
        />
        <ExpensesChart expenses={filteredYear} />
        <ExpensesList items={filteredYear} />
      </Card>
    </li>
  );
}

export default NewExpense;
