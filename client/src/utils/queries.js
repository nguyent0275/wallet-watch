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
