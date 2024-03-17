//React Imports
import { Navigate, useParams } from "react-router-dom";
// import { PieChart } from "react-chartkick";
import "chartkick/chart.js";
import { Popup } from "reactjs-popup";
import BudgetForm from "../../components/BudgetForm/BudgetForm";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER, QUERY_ME } from "../../utils/queries";
import ViewAllBudgets from "../../components/ViewAllBudgets/ViewAllBudgets";
import Auth from "../../utils/auth";

// CSS Imports
import "./singleprofile.css";

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
  console.log(user)
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
      <div className="row">
        <div>
          <h2 id="user">
            Welcome, {user.firstName} {user.lastName}
          </h2>
        </div>

        <div>
          <ViewAllBudgets budgets={budgets} />
        </div>

        <div>
          <Popup
            trigger={<button id="submit-button"> Add Budget </button>}
            position="right center"
            modal
          >
            {(close) => (
              <div className="modal-container">
                <div className="modal-content">
                  <BudgetForm user={user} />
                  <button onClick={() => close()}>Close Modal</button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </>
  );
};

export default SingleProfile;
