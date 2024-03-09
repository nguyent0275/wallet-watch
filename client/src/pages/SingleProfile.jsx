import { Navigate, useParams } from "react-router-dom";
// import { PieChart } from "react-chartkick";
import "chartkick/chart.js";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER, QUERY_ME } from "../utils/queries";
import ViewAllBudgets from "../components/ViewAllBudgets";
import Auth from "../utils/auth"

// shows all the budgets of a single user
// finds the user via their _id and useParams()
// OR
// JWT & Context
const SingleProfile = () => {
  const { userId } = useParams();
  // if there is no userId in the url as a parameter, execute the `QUERY_ME` instead for the logged in user's information 
  // `QUERY_ME` uses the context from the JWT to grab the logged in user's data
  const { loading, data } = useQuery(userId ? QUERY_SINGLE_USER : QUERY_ME, {
    variables: { userId: userId },
  });
  const user = data?.me || data?.user || [];
  const budgets = user.budgets;

  // if user is logged in and the id from the context and the token matches, redirects with `Navigate` to user's profile page with their data ( without url path and useParams() )
  if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
    return <Navigate to="/user" />;
  }
  // conditional rendering
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
