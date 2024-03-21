import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
// categoryArray is being passed from ChartData.js
const CategoryDataTable = (categoryArray) => {
  return (
    <>
      {categoryArray.categoryArray.map((category, index) => (
        <MDBTable key={index}>
          <caption>{category.name}</caption>
          <MDBTableHead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Cost</th>
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
            <tr>
              <td>{}</td>
              <td></td>
              <td></td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      ))}
    </>
  );
};
export default CategoryDataTable;
