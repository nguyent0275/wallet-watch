import { Link } from "react-router-dom";

import "./viewAllBudget.css"

// loads this component on the SingleProfile page
const ViewAllBudgets = ({ budgets }) => {
  console.log(budgets);
  return (
    <>
      <h3>All Budgets</h3>

{/* if there is no context for logged in user data, you can retrieve budgets by a useParams() and the budget's _id */}
      {budgets.map((budget) => (
        <Link key={budget._id} to={"/budget/" + budget._id} className="custom-link">
          <div className="custom-bullet">
            <li>
            <h4>{budget.budgetMonth} {budget.budgetYear}</h4>
            </li>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ViewAllBudgets;
