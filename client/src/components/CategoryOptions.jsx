const CategoryOptions = (categories) => {
  console.log(categories);
  // no category object data, returns 
  if (!categories) {
    return (
      <>
      <option>No Categories</option>
      </>
    );
  }
  return (
    <>
    {/* add a disabled value option, to combat state not being read on the inital value i.e "Bill/Utilities" */}
          <option disabled selected value> -- Choose a category -- </option>
      {categories &&
        categories.categories.map((category) => (
          <option value={category._id} key={category._id}>{category.name}</option>
        ))}
    </>
  );
};

export default CategoryOptions;
