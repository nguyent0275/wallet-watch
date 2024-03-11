import { Link } from "react-router-dom";

// loads this component on the SingleProfile page
const ViewAllBudgets = ({ budgets }) => {
  console.log(budgets);
  return (
    <>
      <h2>All Budgets</h2>

{/* if there is no context for logged in user data, you can retrieve budgets by a useParams() and the budget's _id */}
      {budgets.map((budget) => (
        <Link key={budget._id} to={"/budget/" + budget._id}>
          <div>
            <h2>{budget.budgetMonth}</h2>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ViewAllBudgets;
