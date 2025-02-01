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
