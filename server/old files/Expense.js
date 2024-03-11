// const mongoose = require("mongoose");

// const { Schema } = mongoose;

// const expenseSchema = new Schema({
//   // name of the expense
//   name: {
//     type: String,
//     required: true,
//   },
//   // date that the expense was paid/logged (default will be the current date)
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   // cost of the expense
//   cost: {
//     type: Number,
//     required: true,
//     min: 0.01,
//   },
//   // references the budget the expense belongs to
//   budget: {
//     type: Schema.Types.ObjectId,
//     ref: "Budget",
//     // required: true
//   },
//   // references that category that the expense belongs in
//   category: {
//     type: Schema.Types.ObjectId,
//     ref: "Category",
//     // required: true,
//   },
// });

// const Expense = mongoose.model("Expense", expenseSchema);

// module.exports = Expense;
