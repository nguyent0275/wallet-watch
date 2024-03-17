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
        budgetYear
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
      budgetYear
      expenses {
        _id
        name
        cost
        date
        category {
          _id
          name
        }
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
        budgetYear
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

export const QUERY_ALL_CATEGORIES = gql`
  query allCategories {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_CURRENT_BUDGET = gql`
query Query($userId: ID!, $budgetMonth: String!, $budgetYear: Int!) {
  currentMonthBudget(userId: $userId, budgetMonth: $budgetMonth, budgetYear: $budgetYear) {
    _id
    budgetMonth
    budgetYear
    userId
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
    incomes {
      _id
      name
      amount
    }
  }
}

`;
