// import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_BUDGET } from "../utils/mutations";

const DeleteBudget = (budget) => {

  const [removeIncome,
    //  { error }
  ] = useMutation(REMOVE_BUDGET);
  // console.log(budget)

  const budgetId = budget.budget._id

  // console.log(budgetId);

  const handleDelete = async (event) => {
    console.log("test");
    event.preventDefault();

    try {
      console.log("test");
      console.log(budget);
      const data = await removeIncome({
        variables: { budgetId },
      });
      console.log(data);
      window.location.href = "/user"
    } catch (err) {
      console.error(err);
    }
  };

return (
    <>
    <button onClick={handleDelete}>Delete Budget</button>
    </>
)
};

export default DeleteBudget;