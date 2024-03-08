import { Link } from "react-router-dom";

const ViewAllBudgets = ({ budgets }) => {
  console.log(budgets);
  return (
    <>
      <h2>All Budgets</h2>

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
