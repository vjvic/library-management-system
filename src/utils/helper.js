//filter unique year based on book api
// this will be the option value for dropdown

export const filterUniqueYear = (bookList) => {
  const uniqueYears = [
    ...new Set(
      bookList.map((book) => new Date(book.releaseDate).getFullYear())
    ),
  ]
    .filter((year) => !isNaN(year))
    .sort((a, b) => a - b);

  return uniqueYears;
};
