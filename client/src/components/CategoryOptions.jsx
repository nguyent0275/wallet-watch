const CategoryOptions = (categories) => {
  console.log(categories);
  if (categories.length) {
    return (
      <>
        <h3>No Categories</h3>
      </>
    );
  }
  return (
    <>
      {categories &&
        categories.categories.map((category) => (
          <option value={category._id} key={category._id}>{category.name}</option>
        ))}
    </>
  );
};

export default CategoryOptions;
