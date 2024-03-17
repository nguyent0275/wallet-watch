const typeDefs = `

type User {
  _id: ID
  firstName: String
  lastName: String
  email: String
  budgets: [Budget]
}

type Category {
  _id: ID
  name: String
}

type Budget {
  _id: ID
  userId: ID
  budgetMonth: String
  budgetYear: Int
  expenses: [Expense]
  incomes: [Income]
}

type Expense {
  _id: ID
  name: String
  date: String
  cost: Int
  category: Category
}

type Income {
  _id: ID
  name: String
  date: String
  amount: Int
}

type Auth {
  token: ID!
  user: User
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addBudget(userId: ID! budgetMonth: String! budgetYear: Int!): User
  addExpense(budgetId: ID!, name: String!, cost: Int!, categoryId: ID!): Budget
  addIncome(budgetId: ID!, name: String!, amount: Int!): Budget
  removeBudget(budgetId: ID!): Budget
  removeExpense(budgetId: ID!, expenseId: ID!): Budget
  removeIncome(budgetId: ID!, incomeId: ID!): Budget
  updateBudget(budgetId: ID!, budgetMonth: String budgetYear: Int): Budget
  updateExpense(budgetId: ID!, expenseId: ID!, name: String, cost: Int, categoryId: ID): Budget
  updateIncome(budgetId: ID!, incomeId: ID!,  name: String, amount: Int): Budget
}

type Query {
  users: [User]
  user(userId: ID!): User
  me: User
  categories: [Category]
  budgets: [Budget]
  budget(budgetId: ID!): Budget
  currentMonthBudget(userId: ID!, budgetMonth: String!, budgetYear: Int!): Budget
}

`;

module.exports = typeDefs;
