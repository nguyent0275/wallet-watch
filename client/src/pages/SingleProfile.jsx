import { useParams } from "react-router-dom";
// import { PieChart } from "react-chartkick";
import "chartkick/chart.js";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER } from "../utils/queries";
import ViewAllBudgets from "../components/ViewAllBudgets";

const SingleProfile = () => {
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });
  const user = data?.user || [];
  // console.log(loading);
  // console.log(user);
  const budgets = user.budgets;
  console.log(budgets);
  // const expensesArray = user.budgets[0].expenses;
  // const incomesArray = user.budgets[0].incomes;
  if (loading) {
    return <div>Loading... </div>;
  }
  return (
    <>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <ViewAllBudgets budgets={budgets} />
    </>
  );
};

export default SingleProfile;
