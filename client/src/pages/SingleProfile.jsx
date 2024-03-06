import { Link, useParams } from "react-router-dom";
// import { PieChart } from "react-chartkick";
import "chartkick/chart.js";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER } from "../utils/queries";
// import { PieChart } from "react-chartkick";

const SingleProfile = () => {
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });
  const user = data?.user || [];
  console.log(loading);
  console.log(user);
  // const expensesArray = user.budgets[0].expenses;
  // const incomesArray = user.budgets[0].incomes;
  if (loading) {
    return <div>Loading... </div>;
  }
  return (
    <>
      <Link to="/viewBudget">
        <button className="btn btn-lg btn-danger">View Budget!</button>
      </Link>
      <Link to="/viewAllBudgets">
        <button className="btn btn-lg btn-danger">View All Budget!</button>
      </Link>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      {/* <div>
        Expenses
        <PieChart
          data={[
            [expensesArray[0].name, expensesArray[0].cost],
            [expensesArray[1].name, expensesArray[1].cost],
            [expensesArray[2].name, expensesArray[2].cost],
            [expensesArray[3].name, expensesArray[3].cost],
            [expensesArray[4].name, expensesArray[4].cost],
            [expensesArray[5].name, expensesArray[5].cost],
            [expensesArray[6].name, expensesArray[6].cost],
            [expensesArray[7].name, expensesArray[7].cost],
            [expensesArray[8].name, expensesArray[8].cost],
          ]}
        />
      </div> */}
    </>
  );
};

export default SingleProfile;
