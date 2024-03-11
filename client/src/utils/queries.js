import { gql } from "@apollo/client";

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
      budgets {
        _id
        budgetMonth
        expenses {
          _id
          name
          cost
          date
        }
        incomes {
          _id
          name
          amount
          date
        }
      }
    }
  }
`;

export const QUERY_SINGLE_BUDGET = gql`
  query singleBudget($budgetId: ID!) {
    budget(budgetId: $budgetId) {
      _id
      budgetMonth
      expenses {
        _id
        name
        cost
        date
      }
      incomes {
        _id
        name
        amount
        date
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      budgets {
        _id
        budgetMonth
        expenses {
          _id
          name
          cost
          date
        }
        incomes {
          _id
          name
          amount
          date
        }
      }
    }
  }
`;
