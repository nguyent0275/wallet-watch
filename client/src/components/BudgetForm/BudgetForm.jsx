import { useMutation } from "@apollo/client";
import { ADD_BUDGET } from "../../utils/mutations";
import MonthOptions from "../MonthOptions";
import YearOptions from "../YearOptions";

// userId is being passed from the SingleProfile.jsx
const BudgetForm = ({ userId }) => {

  // addBudget is given the ADD_BUDGET mutation functionality
  const [addBudget, { error }] = useMutation(ADD_BUDGET)

  const handleFormSubmit = async () => {
    // add event as an arg for handleFormSubmit as well
    // will stop the page from refreshing (working as intended, so page will refresh with the addition of new budget)
    // event.preventDefault()

    // running the mutation with the provided variables as args
    try{
      let month = document.getElementById('month-dropdown').value
      let year = document.getElementById('year-dropdown').value
      // concating the values together
      let budgetMonth = month + " " + year
      const { data } = await addBudget({
        variables: {userId, budgetMonth}
      })
      console.log(data)
      // if user is adding a budget from the homepage, it will redirect them to their profile page and show that new budget
      window.location.replace('/user/')
    }catch (err) {
    console.error(err)
    }
  }; 
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>Month</label>
        <select id="month-dropdown">
          <MonthOptions />
        </select>
        <label>Year</label>
        <select id="year-dropdown">
          <YearOptions />
        </select>
        <button type="submit">Submit</button>
        {error && (
          <div>Something went wrong... </div>
        )}
      </form>
    </> 
  );
};

export default BudgetForm;