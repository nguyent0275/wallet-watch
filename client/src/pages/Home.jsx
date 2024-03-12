// import { Link } from "react-router-dom";
import Card from "../components/Card"
import { Popup } from "reactjs-popup";
// import { PieChart } from "react-chartkick";
import "chartkick/chart.js";
import "../assets/css/home.css";
import Auth from "../utils/auth";

const Home = () => {
  if (Auth.loggedIn()) {
    return (
      <div>
        <Popup trigger={<button> Add Budget </button>} modal nested>
          {(close) => (
            <div className="modal">
              <div className="content">
                <form>
                  <label>What is the name of your budget?</label>
                  <input type="text" id="budgetMonth"></input>
                </form>
              </div>
              <div>
                <button>Submit</button>
                <button onClick={() => close()}>Close modal</button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  }
  return (
    <>
      <h2>Home</h2>
      <Card></Card>
    </>
  );
};

export default Home;
