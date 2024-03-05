const mongoose = require("mongoose");

const { Schema } = mongoose;

const incomeSchema = new Schema({
  // name of the income
  name: {
    type: String,
    required: true,
    trim: true,
  },
  // date that the income was received/logged (default will be the current date)
  date: {
    type: Date,
    default: Date.now,
  },
  // amount of the income
  amount: {
    type: Number,
    required: true,
    min: 0.01,
  },
  // references the budget the income belongs to
  budget: {
    type: Schema.Types.ObjectId,
    ref: "Budget",
    required: true
  },
  // references that category that the income belongs in
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;
