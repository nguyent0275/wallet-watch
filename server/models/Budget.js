const mongoose = require('mongoose');

const { Schema } = mongoose;

const budgetSchema = new Schema({
  budgetMonth: {
    type: String,
    required: true,
    trim: true
  },
  expenses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Expense'
    }
  ],
  incomes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Income'
    }
  ]
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
