import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_BUDGET } from "../utils/queries";
import { Popup } from "reactjs-popup";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";
import IncomeForm from "../components/IncomeForm/IncomeForm";
import DeleteForm from "../components/DeleteForm";

// view a single budget based on the budget's _id and useParams()
const ViewBudget = () => {
  const { budgetId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_BUDGET, {
    variables: { budgetId: budgetId },
  });
  const budget = data?.budget || [];
  console.log(budget);



  if (loading) {
    return <div>Loading... </div>;
  }
  return (
    <>
    {/* redirects user back to their profile page with all budgets */}
    <a href="/user">
    <button>Return to All Budget</button>
    </a>
      <Popup
        trigger={<button> Add Expense </button>}
        position="right center"
        modal
      >
        {(close) => (
          <div className="modal">
            <div className="content">
              <ExpenseForm budgetId={budget._id} />
              <button onClick={() => close()}>Close modal</button>
            </div>
          </div>
        )}
      </Popup>
      <Popup
        trigger={<button> Add Income </button>}
        position="right center"
        modal
      >
        {(close) => (
          <div className="modal">
            <div className="content">
              <IncomeForm budgetId={budget._id} />
              <button onClick={() => close()}>Close modal</button>
            </div>
          </div>
        )}
      </Popup>
      <h2>{budget.budgetMonth}</h2>
      <table>
        <caption>Expenses</caption>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Category</th>
          </tr>
          {budget.expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.name}</td>
              <td>{expense.cost}</td>
              <td>{expense.category.name}</td>
              <td><DeleteForm budget={budget} expense /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <caption>Incomes</caption>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
          {budget.incomes.map((income, index) => (
            <tr key={index}>
              <td>{income.date}</td>
              <td>{income.name}</td>
              <td>{income.amount}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ViewBudget;
