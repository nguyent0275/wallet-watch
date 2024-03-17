const MonthOptions = () => {
  // creates an array of months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // if the array is empty, gives an error message
  if (!months.length) {
    return (
      <>
        <option>Error</option>
      </>
    );
  }

  return (
    <>
      {months &&
        months.map((month) => (
          <option id={month} key={month} value={month}>
            {month}
          </option>
        ))}
    </>
  );
};
export default MonthOptions;