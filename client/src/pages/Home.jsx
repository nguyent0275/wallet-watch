import { Link } from "react-router-dom";

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
    </>
  );
};

export default Home;
