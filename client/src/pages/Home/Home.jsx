// import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { Popup } from "reactjs-popup";
import BudgetForm from "../../components/BudgetForm/BudgetForm";
// import { PieChart } from "react-chartkick";
import "chartkick/chart.js";
import "./home.css";
import Auth from "../../utils/auth";
import "reactjs-popup/dist/index.css";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries"

const Home = () => {

  const {loading, data} = useQuery(QUERY_ME)
  const user = data?.me || data?.user || [];
  console.log(user)
  // const budgets = user.budgets;

  if(loading) {
    return <div>Loading... </div>
  }

  if (Auth.loggedIn()) {
    return (
      <>
        <main>
          <h2>Home</h2>
          <div>
            <Popup
              trigger={<button> Add Budget </button>}
              position="right center"
              modal
            >
              {(close) => (
                <div className="modal">
                  <div className="content">
                    <BudgetForm userId={user._id} />
                    <button onClick={() => close()}>Close modal</button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <h2>Home</h2>
      <div id="card-container">
        <Card></Card>
      </div>
    </>
  );
};

export default Home;
