import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_INCOME } from "../../utils/mutations";

const IncomeForm = ({ budgetId }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0.01);

  const [addIncome, { error }] = useMutation(ADD_INCOME);

  console.log(typeof amount);
  // add errorhandling, inputting 0 will not add the expense but it will also not error out
  const handleFormSubmit = async () => {
    // event.preventDefault()

    try {
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
