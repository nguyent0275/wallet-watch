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
import { QUERY_ME } from "../../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || data?.user || [];
  console.log(user);
  const budgets = user.budgets;
  console.log(budgets);
  const currentMonthIndex = new Date().getMonth();
  console.log(currentMonthIndex);
  let currentMonth = "";

  switch (currentMonthIndex) {
    case 0:
      currentMonth = "January";
      break;
    case 1:
      currentMonth = "February";
      break;
    case 2:
      currentMonth = "March";
      break;
    case 3:
      currentMonth = "April";
      break;
    case 4:
      currentMonth = "May";
      break;
    case 5:
      currentMonth = "June";
      break;
    case 6:
      currentMonth = "July"
      break;
    case 7:
      currentMonth = "August"
      break;
    case 8: 
      currentMonth = "September"
      break;
    case 9:
      currentMonth = "October"
      break;
    case 10:
      currentMonth = "November"
      break;
    case 11:
      currentMonth = "December";
      break;
  }
  console.log(currentMonth);

  if (loading) {
    return <div>Loading... </div>;
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
                <div className="modal-container">
                  <div className="modal-content">
                    <BudgetForm userId={user._id} />
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
