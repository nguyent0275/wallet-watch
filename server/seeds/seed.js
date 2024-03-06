const db = require("../config/connection");
const { User, Budget, Category, Expense, Income } = require("../models");
const cleanDB = require("./cleanDB");

// importing the raw json data
const userData = require("./userData.json");
const budgetData = require("./budgetData.json");
const categoryData = require("./categoryData.json");
const incomeData = require("./incomeData.json");
const expenseData = require("./expenseData.json");

db.once("open", async () => {
  // clears out all the collections in the database
  await cleanDB("User", "users");
  await cleanDB("Budget", "budgets");
  await cleanDB("Category", "categories");
  await cleanDB("Income", "incomes");
  await cleanDB("Expense", "expenses");

  // bulk create each model
  await User.insertMany(userData);
  await Budget.insertMany(budgetData);
  await Category.insertMany(categoryData);
  await Income.insertMany(incomeData);
  await Expense.insertMany(expenseData);



  console.log("Data seeded!");
  process.exit(0);
});
