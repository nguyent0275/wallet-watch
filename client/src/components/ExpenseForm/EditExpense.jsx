// imports
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { QUERY_ALL_CATEGORIES } from "../../utils/queries";
import { UPDATE_EXPENSE } from "../../utils/mutations";
import CategoryOptions from "../Dropdowns/CategoryOptions";
import DeleteExpense from "./DeleteExpense";

// passes income and budget from the viewBudget.jsx
const EditExpenseForm = ({ budget, expense }) => {
  const { loading, data } = useQuery(QUERY_ALL_CATEGORIES);
  const categories = data?.categories || [];

  const expenseId = expense._id;
  const budgetId = budget._id;

  const [name, setName] = useState(expense.name);
  const [cost, setCost] = useState(expense.cost);
  const [categoryId, setCategoryId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [updateExpense, { error }] = useMutation(UPDATE_EXPENSE);

  const handleFormSubmit = async () => {
    try {
      // event.preventDefault();
      await updateExpense({
        variables: { budgetId, expenseId, name, cost, categoryId },
      });
      setCost();
      setName("");
      setCategoryId("");
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
  const handleEmptyCost = (e) => {
    const { target } = e;
    const inputValue = target.value;

    if (!inputValue || inputValue === 0) {
      setErrorMessage("Please enter a valid number");
    } else {
      setErrorMessage("");
    }
  };

  if (loading) {
    return <div>Loading... </div>;
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>What is the name of your expense?</label>
        <input
          type="text"
          id="expenseName"
          placeholder="Enter name of the expense..."
          value={name}
          onChange={(event) => setName(event.target.value)}
          onMouseLeave={handleEmptyName}
        ></input>
        <label>What is the cost of the expense?</label>
        <input
          type="number"
          id="expenseCost"
          placeholder="Enter the expense cost..."
          value={cost}
          onChange={(event) => setCost(parseFloat(event.target.value))}
          onMouseLeave={handleEmptyCost}
        ></input>
        <label>What category does it belong to?</label>
        <select
          defaultValue="default"
          placeholder="Choose a category"
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <CategoryOptions categories={categories} />
        </select>
        <button type="submit">Submit</button>
        {errorMessage && <div id="errorMessage">{errorMessage}</div>}
        {error && <div id="error">Something went horribly wrong. Please contact support</div>}
      </form>
      <DeleteExpense budget={budget} expense={expense} />
    </>
  );
};

export default EditExpenseForm;
