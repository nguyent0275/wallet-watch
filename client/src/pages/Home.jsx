import { Link } from "react-router-dom";
import { PieChart } from "react-chartkick";
import "chartkick/chart.js";

const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <Link to="/viewBudget">
        <button className="btn btn-lg btn-danger">View Budget!</button>
      </Link>
      <Link to="/viewAllBudgets">
        <button className="btn btn-lg btn-danger">View All Budget!</button>
      </Link>
      <PieChart
        data={[
          ["Food", 400],
          ["Gas", 100],
          ["Bills", 1200],
          ["Leisure", 300],
          ["Leftover", 800],
        ]}
      />
    </>
  );
};

export default Home;
