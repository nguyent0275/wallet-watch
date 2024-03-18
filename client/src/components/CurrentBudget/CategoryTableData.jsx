import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import "./table.css";
// categoryArray is being passed from ChartData.js
const CategoryDataTable = (categoryArray) => {
  return (
    <>
      <h5 id="tables-container-header">Expenses by Category</h5>
      <div id="tables-container">
        {categoryArray.categoryArray.map((category, index) => (
          <MDBTable className="category-table" key={index}>
            <caption>{category.name}</caption>
            <MDBTableHead>
              <tr>
                <th className="table-date">Date</th>
                <th>Name</th>
                <th className="table-cost">Cost</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {category.expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.expenseDate}</td>
                  <td>{expense.expenseName}</td>
                  <td>{expense.expenseCost}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        ))}
      </div>
    </>
  );
};
export default CategoryDataTable;
