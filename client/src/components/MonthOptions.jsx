const MonthOptions = () => {
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

  if (!months.length) {
    return (
      <>
        <option>No Months</option>
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