import { useMutation } from "@apollo/client";
import { REMOVE_INCOME } from "../../utils/mutations";

// passes budget from the editIncome.jsx
const DeleteIncome = (budget) => {
  const [
    removeIncome,
    // { error }
  ] = useMutation(REMOVE_INCOME);

  const budgetId = budget.budget._id;
  const incomeId = budget.income._id;

  const handleDelete = async () => {
    // event.preventDefault();

    try {
      await removeIncome({
        variables: { budgetId, incomeId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default DeleteIncome;
