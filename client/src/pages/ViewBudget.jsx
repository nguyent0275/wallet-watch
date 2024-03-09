import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_BUDGET } from "../utils/queries";

// view a single budget based on the budget's _id and useParams()
const ViewBudget = () => {
  const { budgetId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_BUDGET, {
    variables: { budgetId: budgetId },
  });
  const budget = data?.budget || [];
  if (loading) {
    return <div>Loading... </div>;
  }
  return (
    <>
      <h2>{budget.budgetMonth}</h2>
      <table>
        <caption>Expenses</caption>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Cost</th>
          </tr>
          {budget.expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.name}</td>
              <td>{expense.cost}</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ViewBudget;
