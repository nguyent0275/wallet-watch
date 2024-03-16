// import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_INCOME } from "../utils/mutations";

// passes budget from the editIncome.jsx
const DeleteIncome = (budget) => {

  const [removeIncome, 
    // { error }
  ] = useMutation(REMOVE_INCOME);
  // console.log(budget)

  const budgetId = budget.budget._id
  const incomeId = budget.income._id

  // console.log(budgetId);
  // console.log(incomeId)

  const handleDelete = async (event) => {
    console.log("test");
    event.preventDefault();

    try {
      console.log("test");
      console.log(budget);
      const data = await removeIncome({
        variables: { budgetId, incomeId },
      });
      console.log(data);
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

export default DeleteIncome;