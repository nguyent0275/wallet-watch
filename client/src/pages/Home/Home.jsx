// import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { Popup } from "reactjs-popup";
import BudgetForm from "../../components/BudgetForm/BudgetForm";
// import { PieChart } from "react-chartkick";
import "chartkick/chart.js";
import "./home.css";
import Auth from "../../utils/auth";
import "reactjs-popup/dist/index.css";

const Home = () => {
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
                <div className="modal-container">
                  <div className="modal-content">
                    <BudgetForm />
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
  return (
    <>
      {/* <h2>Home</h2> */}
      <div id="card-container">
        <Card></Card>
      </div>
    </>
  );
};

export default Home;
