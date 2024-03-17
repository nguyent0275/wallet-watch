import { useQuery } from "@apollo/client";
import { QUERY_CURRENT_BUDGET } from "../../utils/queries";
import CurrentBudgetChartData from "./CurrentBudgetChartData";

// getting user from Home.jsx
const CurrentBudget = (user) => {
  const userId = user.user._id;
  const currentMonthIndex = new Date().getMonth();
  let currentMonth = "";

  // checking for a current year
  let currentYear = new Date().getFullYear();

  // checking for the current month
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
      currentMonth = "July";
      break;
    case 7:
      currentMonth = "August";
      break;
    case 8:
      currentMonth = "September";
      break;
    case 9:
      currentMonth = "October";
      break;
    case 10:
      currentMonth = "November";
      break;
    case 11:
      currentMonth = "December";
      break;
  }

  //queries budget data based on the logged in user and the current month and year
  const { loading, data } = useQuery(QUERY_CURRENT_BUDGET, {
    variables: {
      userId: userId,
      budgetMonth: currentMonth,
      budgetYear: currentYear,
    },
  });
  const currentMonthData = data?.currentMonthBudget;

  // conditional rendering
  // if data is still being retrieved
  if (loading) {
    return <div>Loading... </div>;
  }
  // if there is no current month data
  if (currentMonthData === null) {
    return (
      <>
        <div>No Budget for the Current Month</div>
      </>
    );
  }
  // returns data and charts for current month
  return (
    <>
      <CurrentBudgetChartData budget={currentMonthData} />
    </>
  );
};

export default CurrentBudget;
