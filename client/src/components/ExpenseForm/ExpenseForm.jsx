import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EXPENSE } from "../../utils/mutations";

const ExpenseForm = ({ budgetId }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0.01);

  const [addExpense, { error }] = useMutation(ADD_EXPENSE);

  console.log(typeof cost);
  // add errorhandling, inputting 0 will not add the expense but it will also not error out
  const handleFormSubmit = async () => {
    // event.preventDefault()

    try {
      const data = await addExpense({
        variables: { budgetId, name, cost },
      });
      console.log(data);
      setCost(0.01);
      setName("");
    } catch (err) {
      console.error(err);
    }
  };
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
        <select>
          <option></option>
        </select>
        <button type="submit">Submit</button>
        {error && <div>Something went wrong... </div>}
      </form>
    </>
  );
};

export default ExpenseForm;
