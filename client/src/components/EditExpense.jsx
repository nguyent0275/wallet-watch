// imports
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { QUERY_ALL_CATEGORIES } from "../utils/queries";
import { UPDATE_EXPENSE } from "../utils/mutations";
import CategoryOptions from "./CategoryOptions";
import DeleteExpense from "./DeleteExpense";

// passes income and budget from the viewBudget.jsx
const EditExpenseForm = ({ budget, expense }) => {

  const { loading, data } = useQuery(QUERY_ALL_CATEGORIES);
  const categories = data?.categories || [];

  const expenseId = expense._id
  const budgetId = budget._id

  const [name, setName] = useState(expense.name);
  const [cost, setCost] = useState(expense.cost);
  const [categoryId, setCategoryId] = useState("");

  const [updateExpense, { error }] = useMutation(UPDATE_EXPENSE);

  const handleFormSubmit = async () => {
    try {
      // event.preventDefault()
      console.log(budgetId)
      console.log(expense)
      const expenseData = await updateExpense({
        variables: { budgetId, expenseId, name, cost, categoryId },
      });
      console.log(expenseData);
      setCost();
      setName("");
      setCategoryId("");
    } catch (err) {
      console.error(err);
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
        ></input>
        <label>What is the cost of the expense?</label>
        <input
          type="number"
          id="expenseCost"
          placeholder="Enter the expense cost..."
          value={cost}
          onChange={(event) => setCost(parseFloat(event.target.value))}
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
        {error && <div>Something went wrong... </div>}
      </form>
      <DeleteExpense budget={budget} expense={expense} />
    </>
  );
};


export default EditExpenseForm;