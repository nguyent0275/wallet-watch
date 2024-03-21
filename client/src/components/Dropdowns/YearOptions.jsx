const YearOptions = () => {
  // setting the range for the years array
  let currentYear = new Date().getFullYear();
  let earliestYear = 2000;

  // creates an array of years from current year to the earliest yeart
  const years = [];
  // adds the years into the array in descending order
  for (var i = earliestYear; i <= currentYear; i++) {
    years.unshift(i);
  }
  // console.log(years);
  return (
    <>
      {years &&
        years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
    </>
  );
};
export default YearOptions;
