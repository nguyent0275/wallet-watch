// imports
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_INCOME } from "../../utils/mutations";
import DeleteIncome from "./DeleteIncome";

// passes income and budget from the viewBudget.jsx
const EditIncomeForm = ({ budget, income }) => {

  const incomeId = income._id
  const budgetId = budget._id

  const [name, setName] = useState(income.name);
  const [amount, setAmount] = useState(income.amount);

  const [updateExpense, { error }] = useMutation(UPDATE_INCOME);

  const handleFormSubmit = async () => {
    try {
      // event.preventDefault()
      console.log(budgetId)
      console.log(income)
      const incomeData = await updateExpense({
        variables: { budgetId, incomeId, name, amount},
      });
      console.log(incomeData);
      setAmount();
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
          id="expenseName"
          placeholder="Enter name of the income..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label>What is the amount of the income?</label>
        <input
          type="number"
          id="incomeamount"
          placeholder="Enter the income amount..."
          value={amount}
          onChange={(event) => setAmount(parseFloat(event.target.value))}
        ></input>
        <button type="submit">Submit</button>
        {error && <div>Something went wrong... </div>}
      </form>
      <DeleteIncome budget={budget} income={income} />
    </>
  );
};


export default EditIncomeForm;