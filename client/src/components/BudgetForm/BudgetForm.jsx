
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BUDGET } from "../../utils/mutations";

// userId is being passed from the SingleProfile.jsx
const BudgetForm = ({ userId }) => {
  // setting initial states
  const [budgetMonth, setBudgetMonth] = useState('')

  // addBudget is given the ADD_BUDGET mutation functionality
  const [addBudget, { error }] = useMutation(ADD_BUDGET)

  const handleFormSubmit = async () => {
    // add event as an arg for handleFormSubmit as well
    // will stop the page from refreshing (working as intended, so page will refresh with the addition of new budget)
    // event.preventDefault()

    // running the mutation with the provided variables as args
    try{
      const { data } = await addBudget({
        variables: {userId, budgetMonth}
      })
      console.log(data)
      setBudgetMonth('')
      // if user is adding a budget from the homepage, it will redirect them to their profile page and show that new budget
      window.location.replace('/user')
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
