import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [changetitle, setchangetitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [usernInput, setuserInput] = useState({
  //   changetitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titlechangeHandler = (event) => {
    setchangetitle(event.target.value);
    // console.log(changetitle);

    // setuserInput({
    //   ...usernInput,
    //   changetitle: event.target.value,
    // });

    // setuserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     changetitle: event.target.value,
    //   };
    // });
  };

  const amountchangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setuserInput({
    //   ...usernInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const datechangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setuserInput({
    //   ...usernInput,
    //   enteredDate: event.target.value,
    // });
  };

  function submitHandler(event) {
    event.preventDefault();

    const ExpenseData = {
      title: changetitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(ExpenseData);

    setchangetitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={changetitle}
            onChange={titlechangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountchangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            step="2023-02-28"
            value={enteredDate}
            onChange={datechangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onExpenseCond}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
