const { User, Budget, Category } = require("../models");
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
    // finds a single user by their id and gets all their budgets, expenses, and incomes
    user: async (parent, { userId }) => {
      return await User.findOne({ _id: userId })
        .populate("budgets")
        .populate({
          path: "budgets",
          populate: ["expenses", "incomes"],
        });
    },
    // finds the logged in user data via tokens and context variable
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("budgets")
          .populate({
            path: "budgets",
            populate: ["expenses", "incomes"],
          });
      }
      // if no user is found, throw error
      throw AuthenticationError;
    },
    // find all budgets
    budgets: async () => {
      return await Budget.find({}).populate(["expenses", "incomes"]);
    },
    // finds a single budget by the budget id and gets all the expensea and incomes
    budget: async (parent, { budgetId }) => {
      return await Budget.findOne({ _id: budgetId }).populate([
        "expenses",
        "incomes",
      ]);
    },
    // find all categories
    categories: async () => {
      return await Category.find({}).populate("budgets");
    },
  },
  Mutation: {
    // sign up, creates the user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      console.log({ token, user });
      return { token, user };
    },
    // finds the user by their email, and logins
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

      console.log({ token, user });
      return { token, user };
    },
    // creates a budget, then finds a user and assigns the budget to them
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
              _userId: userId
            },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    // find a budget and adds an expense to the expenses array
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
    // finds a budget and adds an income to the incomes array
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
    // finds a budget by the id and deletes it
    removeBudget: async (parent, { budgetId }) => {
      return await Budget.findOneAndDelete({ _id: budgetId });
    },
    // finds a budget by the id and pulls the expense from the expenses array
    removeExpense: async (parent, { budgetId, expenseId }) => {
      return await Budget.findOneAndUpdate(
        { _id: budgetId },
        { $pull: { expenses: { _id: expenseId } } },
        { new: true }
      );
    },
    // finds a budget by the id and pulls the income from the incomes array
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
