const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const { Schema } = mongoose;

const budgetSchema = new Schema({
  // a budget should only belong to one user (disable for backend testing to apply budgets to multiple users)
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  // name of the budget month
  budgetMonth: {
    type: String,
    required: true,
    // make it unique to the user???
    // unique:true will not allow any other user to use the same budgetMonth
    // unique: true,
    trim: true,
  },
  budgetYear: {
    type: Number,
    required: true,
  },
  // array of objects, containing expense data
  expenses: [
    {
      name: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      cost: {
        type: Number,
        required: true,
        min: 0.01,
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    },
  ],
  // array of objects containing income data
  incomes: [
    {
      name: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      amount: {
        type: Number,
        required: true,
        min: 0.01,
      },
    },
  ],
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
