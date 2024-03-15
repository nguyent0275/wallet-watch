// import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_EXPENSE } from "../utils/mutations";

const DeleteForm = (budget, expense) => {

  const [removeExpense, { error }] = useMutation(REMOVE_EXPENSE);
  console.log(budget)

  const budgetId = budget.budget._id
  const expenseId = budget.expense._id

  console.log(budgetId);
  console.log(expenseId)

  const handleDelete = async (event) => {
    console.log("test");
    event.preventDefault();

    try {
      console.log("test");
      console.log(budget);
      const data = await removeExpense({
        variables: { budgetId, expenseId },
      });
    } catch (err) {
      console.error(err);
    }
  };

return (
    <>
    <button onClick={handleDelete}>Delete</button>
    </>
)
};

export default DeleteForm;