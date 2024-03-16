const YearOptions = () => {
    let currentYear = new Date().getFullYear()
    // console.log(currentYear)
    let earliestYear = 2000
    // console.log(earliestYear);

    const years = []
    for (var i = earliestYear; i <= currentYear; i++){
        years.push(i)
    }
    console.log(years)
    return(
        <>
        {years &&
        years.map((year) => (
            <option key={year} value={year}>{year}</option>
        ))}
        </>
    )
}
export default YearOptions;