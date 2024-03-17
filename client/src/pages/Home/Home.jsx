// import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { Popup } from "reactjs-popup";
import BudgetForm from "../../components/BudgetForm/BudgetForm";
import "chartkick/chart.js";
import "./home.css";
import Auth from "../../utils/auth";
import "reactjs-popup/dist/index.css";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import CurrentBudget from "../../components/CurrentBudget/CurrentBudget"

const Home = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || [];
  
  if (loading) {
    return <div>Loading... </div>;
  }

  if (Auth.loggedIn()) {
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
                    <BudgetForm userId={user._id} />
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
  return (
    <>
      <div id="card-container">
        <Card></Card>
      </div>
    </>
  );
};

export default Home;
