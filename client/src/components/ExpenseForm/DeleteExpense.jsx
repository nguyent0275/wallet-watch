import { useMutation } from "@apollo/client";
import { REMOVE_EXPENSE } from "../../utils/mutations";

// passes budget from the editExpense.jsx
const DeleteExpense = (budget) => {

  const [removeExpense,
    //  { error }
    ] = useMutation(REMOVE_EXPENSE);

  const budgetId = budget.budget._id
  const expenseId = budget.expense._id

  const handleDelete = async (event) => {
    console.log("test");
    event.preventDefault();

    try {
      console.log("test");
      console.log(budget);
      const data = await removeExpense({
        variables: { budgetId, expenseId },
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

export default DeleteExpense;