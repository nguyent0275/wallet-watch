const YearOptions = () => {
  let currentYear = new Date().getFullYear();
  let earliestYear = 2000;

  const years = [];
  for (var i = earliestYear; i <= currentYear; i++) {
    years.unshift(i);
  }
  console.log(years);
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
