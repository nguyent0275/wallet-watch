// imports
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { QUERY_ALL_CATEGORIES } from "../../utils/queries";
import { ADD_EXPENSE } from "../../utils/mutations";
import CategoryOptions from "../CategoryOptions";

const ExpenseForm = ({ budgetId }) => {
  // getting all categories from the backend
  const { loading, data } = useQuery(QUERY_ALL_CATEGORIES);
  const categories = data?.categories || [];

  // setting the initial states (.01 is the min value that the field takes)
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0.01);
  const [categoryId, setCategoryId] = useState("");

  // giving the mutation functionality to the variable addExpense
  const [addExpense, { error }] = useMutation(ADD_EXPENSE);

  // add errorhandling, inputting 0 will not add the expense but it will also not error out
  // initial state is blank or empty, need to change the state to get value
  // categoryid will return blank if you try and use the first option without changing
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("test");
      console.log(budgetId);
      console.log(name);
      console.log(cost);
      console.log(categoryId);

      // running mutations with the provided variables as arguments
      const expenseData = await addExpense({
        variables: { budgetId, name, cost, categoryId },
      });
      console.log(expenseData);
      setCost(0.01);
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
          // value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <CategoryOptions categories={categories} />
        </select>
        <button type="submit">Submit</button>
        {error && <div>Something went wrong... </div>}
      </form>
    </>
  );
};

export default ExpenseForm;
