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
  budgetMonth: String
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
  category: Category
}

type Auth {
  token: ID
  user: User
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addBudget(userId: ID! budgetMonth: String!): User
  addExpense(budgetId: ID!, name: String!, cost: Int!): Budget
  addIncome(budgetId: ID!, name: String!, amount: Int!): Budget
  removeBudget(budgetId: ID!): Budget
  removeExpense(budgetId: ID!, expenseId: ID!): Budget
  removeIncome(budgetId: ID!, incomeId: ID!): Budget
}

type Query {
  users: [User]
  user(userId: ID!): User
  categories: [Category]
  budgets: [Budget]
}

`;

module.exports = typeDefs;
