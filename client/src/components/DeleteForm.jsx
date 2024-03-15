// import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_EXPENSE } from "../utils/mutations";

const DeleteForm = (budget) => {
  const [removeExpense, { error }] = useMutation(REMOVE_EXPENSE);
  console.log(budget)

  const handleDelete = async (event) => {
    console.log("test");
    event.preventDefault();

    try {
      console.log("test");
      console.log(budget);
      const data = await removeExpense({
        variables: { budgetId },
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