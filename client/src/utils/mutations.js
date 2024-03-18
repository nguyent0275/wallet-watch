import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_BUDGET = gql`
  mutation addBudget($userId: ID!, $budgetMonth: String!, $budgetYear: Int!) {
    addBudget(
      userId: $userId
      budgetMonth: $budgetMonth
      budgetYear: $budgetYear
    ) {
      _id
      budgets {
        _id
        budgetMonth
        budgetYear
      }
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation Mutation(
    $budgetId: ID!
    $name: String!
    $cost: Float!
    $categoryId: ID!
  ) {
    addExpense(
      budgetId: $budgetId
      name: $name
      cost: $cost
      categoryId: $categoryId
    ) {
      _id
      budgetMonth
      budgetYear
      expenses {
        _id
        date
        name
        cost
        category {
          _id
          name
        }
      }
    }
  }
`;

export const ADD_INCOME = gql`
  mutation AddIncome($budgetId: ID!, $name: String!, $amount: Float!) {
    addIncome(budgetId: $budgetId, name: $name, amount: $amount) {
      _id
      budgetMonth
      budgetYear
      incomes {
        _id
        date
        name
        amount
      }
    }
  }
`;

export const REMOVE_EXPENSE = gql`
  mutation Mutation($budgetId: ID!, $expenseId: ID!) {
    removeExpense(budgetId: $budgetId, expenseId: $expenseId) {
      _id
      budgetMonth
      budgetYear
      expenses {
        _id
        name
        date
        cost
      }
    }
  }
`;

export const REMOVE_INCOME = gql`
  mutation Mutation($budgetId: ID!, $incomeId: ID!) {
    removeIncome(budgetId: $budgetId, incomeId: $incomeId) {
      _id
      budgetMonth
      budgetYear
      incomes {
        _id
        name
        date
        amount
      }
    }
  }
`;

export const REMOVE_BUDGET = gql`
  mutation RemoveBudget($budgetId: ID!) {
    removeBudget(budgetId: $budgetId) {
      _id
      budgetMonth
      budgetYear
    }
  }
`;

export const UPDATE_EXPENSE = gql`
  mutation Mutation(
    $budgetId: ID!
    $expenseId: ID!
    $name: String
    $cost: Float
    $categoryId: ID
  ) {
    updateExpense(
      budgetId: $budgetId
      expenseId: $expenseId
      name: $name
      cost: $cost
      categoryId: $categoryId
    ) {
      _id
      budgetMonth
      budgetYear
      expenses {
        _id
        name
        date
        cost
        category {
          _id
          name
        }
      }
    }
  }
`;

export const UPDATE_INCOME = gql`
  mutation Mutation(
    $budgetId: ID!
    $incomeId: ID!
    $name: String
    $amount: Float
  ) {
    updateIncome(
      budgetId: $budgetId
      incomeId: $incomeId
      name: $name
      amount: $amount
    ) {
      _id
      budgetMonth
      incomes {
        _id
        date
        name
        amount
      }
    }
  }
`;
