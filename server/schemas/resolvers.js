const { User, Budget, Category, Expense, Income } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    // finds user and gets all their budgets => expenses + incomes => the categories
    users: async () => {
      const data = await User.find({})
        .populate("budgets")
        .populate({
          path: "budgets",
          populate: ["expenses", "incomes"],
        });
      console.log(JSON.stringify(data, null, 2));
      return data;
    },

    budgets: async () => {
      return await Budget.find({}).populate(["expenses", "incomes"]);
    },
    expenses: async () => {
      return await Expense.find({}).populate("category");
    },
    incomes: async () => {
      return await Income.find({}).populate("category");
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
  },
};

module.exports = resolvers;
