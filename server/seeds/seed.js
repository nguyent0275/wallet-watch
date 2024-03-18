require("dotenv").config()
const db = require("../config/connection");
const { User, Budget, Category } = require("../models");
const cleanDB = require("./cleanDB");

// importing the raw json data
const userData = require("./userData.json");
const budgetData = require("./budgetData.json");
const categoryData = require("./categoryData.json");

db.once("open", async () => {
  // clears out all the collections in the database
  await cleanDB("User", "users");
  await cleanDB("Budget", "budgets");
  await cleanDB("Category", "categories");

  // bulk create each model
  await User.insertMany(userData);
  await Budget.insertMany(budgetData);
  await Category.insertMany(categoryData);

  console.log("Data seeded!");
  process.exit(0);
});
