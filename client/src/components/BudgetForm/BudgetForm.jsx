import { useMutation } from "@apollo/client";
import { ADD_BUDGET } from "../../utils/mutations";
import MonthOptions from "../Dropdowns/MonthOptions";
import YearOptions from "../Dropdowns/YearOptions";

// userId is being passed from the SingleProfile.jsx
const BudgetForm = ({ user }) => {
  console.log(user);
  const userId = user._id;
  const userBudgetsArray = user.budgets;

  // creates an empty array
  const budgetMonthAndYearsArray = [];

  // pushes the concatenated values of month and years of all the user's budget
  // i.e ['March 2024, 'April 2024, 'May 2024']
  for (let i = 0; i < userBudgetsArray.length; i++) {
    let budgetMonthAndYear =
      userBudgetsArray[i].budgetMonth + " " + userBudgetsArray[i].budgetYear;
    budgetMonthAndYearsArray.push(budgetMonthAndYear);
  }
  console.log(budgetMonthAndYearsArray);

  // addBudget is given the ADD_BUDGET mutation functionality
  const [addBudget, { error }] = useMutation(ADD_BUDGET);

  const handleFormSubmit = async (event) => {
    // add event as an arg for handleFormSubmit as well
    // will stop the page from refreshing (working as intended, so page will refresh with the addition of new budget)
    event.preventDefault();

    // running the mutation with the provided variables as args
    try {
      let budgetMonth = document.getElementById("month-dropdown").value;
      let budgetYear = parseInt(document.getElementById("year-dropdown").value);
      // concatenates the values of the user's input for month and year in the same format as the budgetMonthandYearsArray
      let addedBudget = budgetMonth + " " + String(budgetYear);
      // checks it user input vs. budgetMonthAndYearsArray (budgets they already have)
      // prevent duplicates from being added to the user's budget list
      for (let i = 0; i < budgetMonthAndYearsArray.length; i++) {
        if (addedBudget === budgetMonthAndYearsArray[i]) {
          console.log("This month already exists");
          return;
        }
      }
      const { data } = await addBudget({
        variables: { userId, budgetMonth, budgetYear },
      });
      console.log(data);
      // if user is adding a budget from the homepage, it will redirect them to their profile page and show that new budget
      window.location.replace("/user/");
    } catch (err) {
      console.error(err);
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
        {error && <div>This month already beongs</div>}
      </form>
    </>
  );
};

export default BudgetForm;
