// imports
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { QUERY_ALL_CATEGORIES } from "../../utils/queries";
import { ADD_EXPENSE } from "../../utils/mutations";
import CategoryOptions from "../Dropdowns/CategoryOptions";

// budgetId is being pased from the viewBudget page
const ExpenseForm = ({ budgetId }) => {
  // getting all categories from the backend
  const { loading, data } = useQuery(QUERY_ALL_CATEGORIES);
  const categories = data?.categories || [];

  // setting the initial states (.01 is the min value that the field takes)
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0.01);
  const [categoryId, setCategoryId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // giving the mutation functionality to the variable addExpense
  const [addExpense, { error }] = useMutation(ADD_EXPENSE);

  // add errorhandling, inputting 0 will not add the expense but it will also not error out
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // running mutations with the provided variables as arguments
      await addExpense({
        variables: { budgetId, name, cost, categoryId },
      });
      setCost(0.01);
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

  // conditional rendering, waiting for data from query
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
        {error && <div id="error">Please enter a category</div>}
      </form>
    </>
  );
};

export default ExpenseForm;
