import { useQuery } from "@apollo/client";
import { QUERY_ALL_CATEGORIES } from "../utils/queries";
import { PieChart, ColumnChart } from "react-chartkick";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

const ChartData = (budget) => {
  console.log(budget);
  const expenseArray = budget.budget.expenses;
  const { loading, data } = useQuery(QUERY_ALL_CATEGORIES);
  const categories = data?.categories || [];

  console.log(expenseArray);
  const categoryArray = [];

  for (let i = 0; i < categories.length; i++) {
    var categoryName = categories[i].name;
    var categoryId = categories[i]._id;
      let categoryObject = {
        id: categoryId,
        name: categoryName,
        total: 0,
        expenses: [],
      };
      categoryArray.push(categoryObject);
  }
  console.log(categoryArray)
  // 13
  for (let i = 0; i < expenseArray.length; i++) {
    let expenseCategory = expenseArray[i].category._id;
    let expenseObject = {
      expenseDate: expenseArray[i].date,
      expenseName: expenseArray[i].name,
      expenseCost: expenseArray[i].cost
    }
    // 8
    for (let j = 0; j < categoryArray.length; j++) {
      if (expenseCategory === categoryArray[j].id) {
        categoryArray[j].total = categoryArray[j].total + expenseArray[i].cost;
        categoryArray[j].expenses.push(expenseObject)
      }
    }
  }
  console.log(categoryArray);

  var totalExpense = 0;
  for (let i = 0; i < categoryArray.length; i++) {
    totalExpense = totalExpense + categoryArray[i].total;
  }
  console.log(totalExpense);

  const chartData = [];
  for (let i = 0; i < categoryArray.length; i++) {
    chartData.push([categoryArray[i].name, categoryArray[i].total]);
  }

  const incomeArray = budget.budget.incomes;
  var totalIncome = 0;
  for (let i = 0; i < incomeArray.length; i++) {
    totalIncome = totalIncome + incomeArray[i].amount;
  }
  console.log(totalIncome);

  if (loading) {
    return <div>Loading... </div>;
  }
  return (
    <>
      <h4>Total Income</h4>
      <h5>${totalIncome}</h5>
      <h4>Remaining Budget</h4>
      <h5>${totalIncome - totalExpense}</h5>
      <PieChart data={chartData} />
      <ColumnChart data={chartData} />
      {categoryArray.map((category, index) => (
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
export default ChartData;
