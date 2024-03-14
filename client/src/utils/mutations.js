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
  mutation addBudget($userId: ID!, $budgetMonth: String!) {
    addBudget(userId: $userId, budgetMonth: $budgetMonth) {
      _id
      budgets {
        _id
        budgetMonth
      }
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation Mutation(
    $budgetId: ID!
    $name: String!
    $cost: Int!
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
  mutation AddIncome($budgetId: ID!, $name: String!, $amount: Int!) {
    addIncome(budgetId: $budgetId, name: $name, amount: $amount) {
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
