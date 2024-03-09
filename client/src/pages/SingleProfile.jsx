import { Navigate, useParams } from "react-router-dom";
// import { PieChart } from "react-chartkick";
import "chartkick/chart.js";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER, QUERY_ME } from "../utils/queries";
import ViewAllBudgets from "../components/ViewAllBudgets";
import Auth from "../utils/auth"

const SingleProfile = () => {
  const { userId } = useParams();
  // if there is no userId in the url as a parameter, execute the `QUERY_ME` instead for the logged in user's information 
  const { loading, data } = useQuery(userId ? QUERY_SINGLE_USER : QUERY_ME, {
    variables: { userId: userId },
  });
  const user = data?.me || data?.user || [];
  console.log(user)
  const budgets = user.budgets;
  console.log(budgets);

  if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
    return <Navigate to="/user" />;
  }
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
