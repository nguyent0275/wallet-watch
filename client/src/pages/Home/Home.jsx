// react & apollo imports
import { useQuery } from "@apollo/client";
// import { useState } from "react";
import { QUERY_ME } from "../../utils/queries";
import { Popup } from "reactjs-popup";
// importing authorization helper
import Auth from "../../utils/auth";
// importing components
import Card from "../../components/Card/Card";
import BudgetForm from "../../components/BudgetForm/BudgetForm";
import CurrentBudget from "../../components/CurrentBudget/CurrentBudget";
// css imports
import "reactjs-popup/dist/index.css";
import "./home.css";
import "chartkick/chart.js";

const Home = () => {
  // queries the logged in user
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || [];
  const budgets = user.budgets;

  // conditional rendering
  // if data is still being retrieved
  if (loading) {
    return <div>Loading... </div>;
  }

  // if there is no user returned from the query
  // default landing page
  if (user.length === 0)
    return (
      <>
        <div id="card-container">
          <Card></Card>
        </div>
      </>
    );

  // if user is logged in and has no budget
  if ((Auth.loggedIn() && budgets.length === 0) || undefined) {
      return (
        <>
          <main>
            <div>
              <Popup
                trigger={<button> Add Budget </button>}
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
          </main>
        </>
      );
  }
  // if user is loggedin and has a current month budget
  if (Auth.loggedIn && budgets.length > 0) {
      return (
        <>
          <main>
            <div>
              <Popup
                trigger={<button> Add Budget </button>}
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
            <CurrentBudget user={user} />
          </main>
        </>
      );
  }
};

export default Home;
