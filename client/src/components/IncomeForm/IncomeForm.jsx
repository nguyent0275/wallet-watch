import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_INCOME } from "../../utils/mutations";

// budgetId is being passed from the ViewBudget.jsx
const IncomeForm = ({ budgetId }) => {
   // setting the initial states (.01 is the min value that the field takes)
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0.01);

  // giving the mutation functionality to the variable addExpense
  const [addIncome, { error }] = useMutation(ADD_INCOME);

  console.log(typeof amount);
  // add errorhandling, inputting 0 will not add the expense but it will also not error out
  const handleFormSubmit = async () => {
    // event.preventDefault()

    try {
      // running mutations with the provided variables as arguments
      const data = await addIncome({
        variables: { budgetId, name, amount },
      });
      console.log(data);
      setAmount(0.01);
      setName("");
    } catch (err) {
      console.error(err);
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
        ></input>
        <label>What is the amount of the income?</label>
        <input
          type="number"
          id="expenseCost"
          placeholder="Enter the expense cost..."
          value={amount}
          onChange={(event) => setAmount(parseFloat(event.target.value))}
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

export default IncomeForm;
