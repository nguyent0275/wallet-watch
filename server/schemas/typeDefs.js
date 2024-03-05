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
  date: Date
  cost: Int
  budget: Budget
  category: Category
}

type Income {
  _id: ID
  name: String
  date: Date
  amount: Int
  budget: Budget
  category: Category
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
}

`;

module.exports = typeDefs;
