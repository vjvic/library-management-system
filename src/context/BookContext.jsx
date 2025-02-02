import { createContext, useContext, useState, useEffect } from "react";
import { getAllBooks } from "../services/bookService";

const BookContext = createContext(null);

export const BookProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]); // books state
  const [filteredBookList, setFilteredBookList] = useState([]); // book state after filter
  const [sortOption, setSortOption] = useState(""); // sortoption state
  const [filters, setFilters] = useState({
    // filters state
    name: "",
    exactMatch: false,
    author: false,
    publisher: false,
    yearFrom: "",
    yearTo: "",
    languages: [],
  });

  //fetching books (Runs only once when the component mounts)
  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getAllBooks();
      setBookList(data); // set book state
      setFilteredBookList(data); // Initializes the filtered list with all books
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    // exact match filter
    const matches = (value, filterValue, exactMatch) => {
      if (!value) return false;
      const lowerValue = value.toLowerCase();
      const lowerFilter = filterValue.toLowerCase();
      return exactMatch
        ? lowerValue === lowerFilter // return this if exact match is true
        : lowerValue.includes(lowerFilter); // return this if exact match false
    };

    // filter by name
    const filterByName = (book) => {
      if (!filters.name) return true;
      if (filters.author)
        return matches(book.author, filters.name, filters.exactMatch);
      if (filters.publisher)
        return matches(book.publisher, filters.name, filters.exactMatch);
      return matches(book.title, filters.name, filters.exactMatch);
    };

    // filter by year (range)
    const filterByYear = (book) => {
      if (!filters.yearFrom && !filters.yearTo) return true;
      const bookYear = new Date(book.releaseDate).getFullYear();
      const fromYear = filters.yearFrom ? Number(filters.yearFrom) : -Infinity;
      const toYear = filters.yearTo ? Number(filters.yearTo) : Infinity;
      return bookYear >= fromYear && bookYear <= toYear;
    };

    // filter by language (this is not working)
    const filterByLanguage = (book) => {
      if (filters.languages.length === 0) return true;
      return filters.languages.includes(book.language);
    };

    // combining filters
    let filteredBooks = bookList.filter(
      (book) =>
        filterByName(book) && filterByYear(book) && filterByLanguage(book)
    );

    // sorting books by title, author, date
    filteredBooks = [...filteredBooks].sort((a, b) => {
      if (sortOption === "title") return a.title.localeCompare(b.title); // alphabetical
      if (sortOption === "author") return a.author.localeCompare(b.author); //alphabetical
      if (sortOption === "date")
        // Chronological order
        return new Date(a.releaseDate) - new Date(b.releaseDate);
      return 0;
    });

    setFilteredBookList(filteredBooks); // updates the filtered books to reflect the applied filters and sorts
  }, [filters, bookList, sortOption]); // dependency array (render when filters, booklist, sortoption changes)

  // filters change function
  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // sort change function
  const handleSortChange = (value) => {
    setSortOption(value);
  };

  return (
    <BookContext.Provider
      value={{
        bookList,
        filteredBookList,
        filters,
        handleFilterChange,
        sortOption,
        handleSortChange,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
