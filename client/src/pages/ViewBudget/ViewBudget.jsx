//React Imports
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_BUDGET } from "../../utils/queries";
import { Popup } from "reactjs-popup";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import IncomeForm from "../../components/IncomeForm/IncomeForm";
import DeleteBudget from "../../components/BudgetForm/DeleteBudget";
import EditExpenseForm from "../../components/ExpenseForm/EditExpense";
import EditIncomeForm from "../../components/IncomeForm/EditIncome"

// doesnt do anything?
// import "../App.css";

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
      <DeleteBudget budget={budget} />
      <Popup
        trigger={<button> Add Expense </button>}
        position="right center"
        modal
      >
        {(close) => (
          <div className="modal-container">
            <div className="modal-content">
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
          <div className="modal-container">
            <div className="modal-content">
              <IncomeForm budgetId={budget._id} />
              <button onClick={() => close()}>Close modal</button>
            </div>
          </div>
        )}
      </Popup>
      <h2>{budget.budgetMonth} {budget.budgetYear}</h2>
      <MDBTable>
        <caption>Expenses</caption>
        <MDBTableHead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Category</th>
            <th>Edit</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {budget.expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.name}</td>
              <td>{expense.cost}</td>
              <td>{expense.category.name}</td>
              <td>
              <Popup
                  trigger={<button> Edit </button>}
                  position="right center"
                  modal
                >
                  {(close) => (
                    <div className="modal-container">
                      <div className="modal-content">
                        <EditExpenseForm budget={budget} expense={expense} />
                        <button onClick={() => close()}>Close modal</button>
                      </div>
                    </div>
                  )}
                </Popup>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <MDBTable>
        <caption>Incomes</caption>
        <MDBTableHead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Edit</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {budget.incomes.map((income, index) => (
            <tr key={index}>
              <td>{income.date}</td>
              <td>{income.name}</td>
              <td>{income.amount}</td>
              <td>
              <Popup
                  trigger={<button> Edit </button>}
                  position="right center"
                  modal
                >
                  {(close) => (
                    <div className="modal-container">
                      <div className="modal-content">
                        <EditIncomeForm budget={budget} income={income} />
                        <button onClick={() => close()}>Close modal</button>
                      </div>
                    </div>
                  )}
                </Popup>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default ViewBudget;
