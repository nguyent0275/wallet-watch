const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const { Schema } = mongoose;

const budgetSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  budgetMonth: {
    type: String,
    required: true,
    trim: true,
  },
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
      category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    },
  ],
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
