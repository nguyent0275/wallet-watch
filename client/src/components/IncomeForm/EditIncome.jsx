// imports
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_INCOME } from "../../utils/mutations";
import DeleteIncome from "./DeleteIncome";

// passes income and budget from the viewBudget.jsx
const EditIncomeForm = ({ budget, income }) => {
  const incomeId = income._id;
  const budgetId = budget._id;

  const [name, setName] = useState(income.name);
  const [amount, setAmount] = useState(income.amount);
  const [errorMessage, setErrorMessage] = useState("");

  const [updateExpense, { error }] = useMutation(UPDATE_INCOME);

  const handleFormSubmit = async () => {
    try {
      // event.preventDefault()
      await updateExpense({
        variables: { budgetId, incomeId, name, amount },
      });
      setAmount();
      setName("");
    } catch (err) {
      console.error(err);
    }
  };

  // on mouseLeave of the field, will check for input and serve an error message
  const handleEmptyName = (e) => {
    const { target } = e;
    const inputValue = target.value;

    if (!inputValue) {
      setErrorMessage("Please enter a name");
    } else {
      setErrorMessage("");
    }
  };

  // on mouseLeave of the field, will check for input and serve an error message
  const handleEmptyAmount = (e) => {
    const { target } = e;
    const inputValue = target.value;

    if (!inputValue || inputValue === 0) {
      setErrorMessage("Please enter a valid number");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>What is the name of your income?</label>
        <input
          type="text"
          id="expenseName"
          placeholder="Enter name of the income..."
          value={name}
          onChange={(event) => setName(event.target.value)}
          onMouseLeave={handleEmptyName}
        ></input>
        <label>What is the amount of the income?</label>
        <input
          type="number"
          id="incomeamount"
          placeholder="Enter the income amount..."
          value={amount}
          onChange={(event) => setAmount(parseFloat(event.target.value))}
          onMouseLeave={handleEmptyAmount}
        ></input>
        <button type="submit">Submit</button>
        {errorMessage && <div id="errorMessage">{errorMessage}</div>}
        {error && (
          <div id="error">
            Something went horribly wrong. Please contact support
          </div>
        )}
      </form>
      <DeleteIncome budget={budget} income={income} />
    </>
  );
};

export default EditIncomeForm;
