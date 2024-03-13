
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BUDGET } from "../../utils/mutations";

const BudgetForm = ({ userId }) => {
  const [budgetMonth, setBudgetMonth] = useState('')

  const [addBudget, { error }] = useMutation(ADD_BUDGET)

  const handleFormSubmit = async (event) => {
    // will stop the page from refreshing (working as intended, so page will refresh with the addition of new budget)
    // event.preventDefault()

    try{
      const { data } = await addBudget({
        variables: {userId, budgetMonth}
      })
      console.log(data)
      setBudgetMonth('')
    }catch (err) {
    console.error(err)
    }
  }; 
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>What is the name of your budget?</label>
        <input type="text" id="budgetMonth" placeholder="Enter a month..." value={budgetMonth} onChange={(event) => setBudgetMonth(event.target.value)}></input>
        <button type="submit">Submit</button>
        {error && (
          <div>Something went wrong... </div>
        )}
      </form>
    </> 
  );
};

export default BudgetForm;
