const { User, Budget, Category, Expense, Income } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

// use this for debugging / wrap function in a variable / log and return the variable
//   const data = await User.find({})
//   console.log(JSON.stringify(data, null, 2));
//   return data;

const resolvers = {
  Query: {
    // finds all users and gets all their budgets => expenses + incomes => the categories
    users: async () => {
      return await User.find({})
        .populate("budgets")
        .populate({
          path: "budgets",
          populate: ["expenses", "incomes"],
        });
    },
    budgets: async () => {
      return await Budget.find({}).populate(["expenses", "incomes"]);
    },
    categories: async () => {
      return await Category.find({}).populate("budgets");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addBudget: async (parent, { userId, budgetMonth }) => {
      const budgetData = await Budget.create({ budgetMonth });
      console.log(budgetData);
      await User.findOneAndUpdate(
        {
          _id: userId,
        },
        {
          $addToSet: {
            budgets: {
              _id: budgetData._id,
            },
          },
        }
      );
    },
    addExpense: async (parent, { budgetId, name, cost }) => {
      return await Budget.findOneAndUpdate(
        { _id: budgetId },
        {
          $addToSet: {
            expenses: {
              name,
              cost,
            },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addIncome: async (parent, { budgetId, name, amount }) => {
      return await Budget.findOneAndUpdate(
        { _id: budgetId },
        {
          $addToSet: {
            incomes: {
              name,
              amount,
            },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeBudget: async (parent, { budgetId }) => {
      return await Budget.findOneAndDelete({ _id: budgetId });
    },
    removeExpense: async (parent, { budgetId, expenseId }) => {
      return await Budget.findOneAndUpdate(
        { _id: budgetId },
        { $pull: { expenses: { _id: expenseId } } },
        { new: true }
      );
    },
    removeIncome: async (parent, { budgetId, incomeId }) => {
      return await Budget.findOneAndUpdate(
        { _id: budgetId },
        { $pull: { incomes: { _id: incomeId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
