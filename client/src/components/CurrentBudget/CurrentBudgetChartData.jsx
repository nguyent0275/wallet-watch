import { useQuery } from "@apollo/client";
import { QUERY_ALL_CATEGORIES } from "../../utils/queries";
import { LineChart, PieChart } from "react-chartkick";
import { useState } from "react";
import CategoryDataTable from "./CategoryTableData";

// css import
import "./currentbudget.css";

// getting budget from CurrentBudget.jsx
const CurrentBudgetChartData = (budget) => {
  const expenseArray = budget.budget.expenses;
  const { loading, data } = useQuery(QUERY_ALL_CATEGORIES);
  const categories = data?.categories || [];

  // creating an empty array of objects
  const categoryArray = [];

  // pushing objects containing category id, name, and total for each category
  // nests an empty array of expenses, will add expense data based on category type
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
  // creating an expense object for each expense
  for (let i = 0; i < expenseArray.length; i++) {
    let expenseCategory = expenseArray[i].category._id;
    let expenseObject = {
      expenseDate: expenseArray[i].date,
      expenseName: expenseArray[i].name,
      expenseCost: expenseArray[i].cost,
    };
    // gets the total spending of each category by looping through all the expenses and adding together all the ones with matching category ids
    // also pushes each expense object to an array inside each categoryObject based on the category id
    for (let j = 0; j < categoryArray.length; j++) {
      if (expenseCategory === categoryArray[j].id) {
        categoryArray[j].total = categoryArray[j].total + expenseArray[i].cost;
        categoryArray[j].expenses.push(expenseObject);
      }
    }
  }
  // calculates the total spending of all categories in this budget
  var totalExpense = 0;
  for (let i = 0; i < categoryArray.length; i++) {
    totalExpense = totalExpense + categoryArray[i].total;
  }

  // formats the data into an array of arrays to load into charts
  const chartData = [];
  for (let i = 0; i < categoryArray.length; i++) {
    chartData.push([categoryArray[i].name, categoryArray[i].total]);
  }

  // calculates the total income of this budget
  const incomeArray = budget.budget.incomes;
  var totalIncome = 0;
  for (let i = 0; i < incomeArray.length; i++) {
    totalIncome = totalIncome + incomeArray[i].amount;
  }

  // creating an array of all the dates of the expneses
  const expenseDateArray = [];
  for (let i = 0; i < expenseArray.length; i++) {
    expenseDateArray.push(expenseArray[i].date);
  }

  // filters out only the unique dates
  const uniqueDateArray = [...new Set(expenseDateArray)];

  // empty array of objects
  const dateArrayOfObjects = [];

  // creates an object that contains a unique date, total, and expenses array
  for (let i = 0; i < uniqueDateArray.length; i++) {
    var uniqueDate = uniqueDateArray[i];
    let dateObject = {
      date: uniqueDate,
      total: 0,
      expenses: [],
    };
    dateArrayOfObjects.push(dateObject);
  }

  // creates an expense object for each object containing name and cost
  for (let i = 0; i < expenseArray.length; i++) {
    let expenseDate = expenseArray[i].date;
    let expenseObject = {
      expenseName: expenseArray[i].name,
      expenseCost: expenseArray[i].cost,
    };
    // appends the expense object to the corresponding matching date object
    // also totals all the expenses for that date and adds it to the date object
    for (let j = 0; j < dateArrayOfObjects.length; j++) {
      if (expenseDate === dateArrayOfObjects[j].date) {
        dateArrayOfObjects[j].total =
          dateArrayOfObjects[j].total + expenseArray[i].cost;
        dateArrayOfObjects[j].expenses.push(expenseObject);
      }
    }
  }

  // setting empty arrays for formatting date for Line Chart
  // line chart takes an object instead of an array of arrays
  let dateArray = [];
  let costArray = [];

  // formats the dates and totals under each array
  for (let i = 0; i < dateArrayOfObjects.length; i++) {
    dateArray.push(dateArrayOfObjects[i].date);
    costArray.push(dateArrayOfObjects[i].total);
  }

  // adds the formated data to the object
  let lineChartData = {};
  for (let i = 0; i < dateArrayOfObjects.length; i++) {
    let key = dateArray[i];
    let value = costArray[i];

    lineChartData[key] = value;
  }

  // set a toggle state on a button to switch between viewing by category or date
  const [isToggled, setToggle] = useState(true);

  // on click will turn true => false OR false => true
  const handleToggle = () => {
    setToggle(!isToggled);
  };

  // conditional rendering (waiting for queries to run)
  if (loading) {
    return <div>Loading... </div>;
  }

  // true === PieChart / Categories
  if (isToggled) {
    return (
      <>
        <div className="text-white">
          <h4>Total Monthly Income</h4>
          <h5>${totalIncome}</h5>
          <h4>Total Monthly Spending</h4>
          <h5>${totalExpense}</h5>
          <h4>Remaining Monthly Budget</h4>
          <h5>${totalIncome - totalExpense}</h5>
          <button onClick={handleToggle}>Show Daily Spending</button>
          <h6>Spending by Category</h6>
        </div>
        <div className="background-white">
          <PieChart data={chartData} />
        </div>
        <CategoryDataTable categoryArray={categoryArray} />
      </>
    );
  }

  // false === LineChart / Daily Spending
  return (
    <>
      <div className="text-white">
        <h4>Total Monthly Income</h4>
        <h5>${totalIncome}</h5>
        <h4>Total Monthly Spending</h4>
        <h5>${totalExpense}</h5>
        <h4>Remaining Monthly Budget</h4>
        <h5>${totalIncome - totalExpense}</h5>
        <button onClick={handleToggle}>Show Daily Spending</button>
        <h6>Spending by Day</h6>
      </div>
      <div className="background-white">
        <LineChart data={lineChartData} />
      </div>
      <CategoryDataTable categoryArray={categoryArray} />
    </>
  );
};
export default CurrentBudgetChartData;
