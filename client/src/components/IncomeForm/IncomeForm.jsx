import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_INCOME } from "../../utils/mutations";

// budgetId is being passed from the ViewBudget.jsx
const IncomeForm = ({ budgetId }) => {
  // setting the initial states (.01 is the min value that the field takes)
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0.01);
  const [errorMessage, setErrorMessage] = useState("");

  // giving the mutation functionality to the variable addExpense
  const [addIncome, { error }] = useMutation(ADD_INCOME);

  // add errorhandling, inputting 0 will not add the expense but it will also not error out
  const handleFormSubmit = async () => {
    // event.preventDefault()

    try {
      // running mutations with the provided variables as arguments
      await addIncome({
        variables: { budgetId, name, amount },
      });
      setAmount(0.01);
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
          id="incomeName"
          placeholder="Enter name of the income..."
          value={name}
          onChange={(event) => setName(event.target.value)}
          onMouseLeave={handleEmptyName}
        ></input>
        <label>What is the amount of the income?</label>
        <input
          type="number"
          id="expenseCost"
          placeholder="Enter the expense cost..."
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
    </>
  );
};

export default IncomeForm;
