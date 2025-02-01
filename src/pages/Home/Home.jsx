import "./Home.scss";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import Checkbox from "../../components/Checkbox/Checkbox";
import Dropdown from "../../components/Select/Dropdown";
import BookCard from "../../components/BookCard/BookCard";
import { getAllBooks } from "../../services/bookService";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [bookList, setBookList] = useState([]);
  const [filteredBookList, setFilteredBookList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  const [filters, setFilters] = useState({
    name: "",
    exactMatch: false,
    author: false,
    publisher: false,
    yearFrom: "",
    yearTo: "",
    languages: [],
  });

  const matches = (value, filterValue, exactMatch) => {
    if (!value) return false;
    const lowerValue = value.toLowerCase();
    const lowerFilter = filterValue.toLowerCase();
    return exactMatch
      ? lowerValue === lowerFilter
      : lowerValue.includes(lowerFilter);
  };

  const filterByName = (book, filters) => {
    if (!filters.name) return true;
    if (filters.author)
      return matches(book.author, filters.name, filters.exactMatch);
    if (filters.publisher)
      return matches(book.publisher, filters.name, filters.exactMatch);
    return matches(book.title, filters.name, filters.exactMatch);
  };

  const filterByYear = (book, filters) => {
    if (!filters.yearFrom && !filters.yearTo) return true;
    const bookYear = new Date(book.releaseDate).getFullYear();
    const fromYear = filters.yearFrom ? Number(filters.yearFrom) : -Infinity;
    const toYear = filters.yearTo ? Number(filters.yearTo) : Infinity;
    return bookYear >= fromYear && bookYear <= toYear;
  };

  const filterByLanguage = (book, filters) => {
    if (filters.languages.length === 0) return true;
    return filters.languages.includes(book.language);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getAllBooks();
      setBookList(data);
      setFilteredBookList(data);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const filteredBooks = bookList.filter(
      (book) =>
        filterByName(book, filters) &&
        filterByYear(book, filters) &&
        filterByLanguage(book, filters)
    );

    setFilteredBookList(filteredBooks);
  }, [filters, bookList]);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const uniqueYears = [
    ...new Set(
      bookList.map((book) => new Date(book.releaseDate).getFullYear())
    ),
  ]
    .filter((year) => !isNaN(year))
    .sort((a, b) => a - b);

  // Pagination Logic
  const totalPages = Math.ceil(filteredBookList.length / booksPerPage);
  const displayedBooks = filteredBookList.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  console.log(bookList);

  return (
    <div>
      <section className="filter-section">
        <div className="search-wrapper">
          <SearchBar
            placeholder="Search by name..."
            value={filters.name}
            onChange={(e) => handleFilterChange("name", e.target.value)}
          />
          <Button>Search</Button>

          <div className="book-numbers">
            <p>{filteredBookList.length} Books</p>
          </div>
        </div>

        {isFilter && (
          <div className="filters-wrapper">
            {[
              { label: "Exact Matching", name: "exactMatch" },
              { label: "Authors", name: "author" },
              { label: "Publisher", name: "publisher" },
            ].map((filter) => (
              <Checkbox
                key={filter.name}
                label={filter.label}
                name={filter.name}
                checked={filters[filter.name]}
                onChange={(e) =>
                  handleFilterChange(filter.name, e.target.checked)
                }
              />
            ))}
            {[
              {
                placeholder: "Year From",
                name: "yearFrom",
                options: uniqueYears,
              },
              { placeholder: "Year To", name: "yearTo", options: uniqueYears },
              {
                placeholder: "Select Language",
                name: "languages",
                options: ["English", "Spanish", "French", "German"],
              },
            ].map(({ placeholder, name, options }) => (
              <Dropdown
                key={name}
                placeholder={placeholder}
                bordered={true}
                value={filters[name]}
                onChange={(e) => handleFilterChange(name, e.target.value)}
                name={name}
                options={options}
              />
            ))}
          </div>
        )}
        <div className="search-filter-button">
          <button onClick={() => setIsFilter(!isFilter)}>Search Options</button>
        </div>
      </section>

      <section className="book-section">
        <div className="filter-book">
          <Dropdown
            placeholder="Filter by"
            bordered={false}
            options={["Show All", "Recently Added"]}
            size="small"
          />
          <Dropdown
            placeholder="Sort by"
            bordered={false}
            options={["Title", "Author", "Publication Date"]}
            size="small"
          />
        </div>
        <div className="books-wrapper">
          {displayedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
};

export default Home;

//todo
// clean up code
// seperate overlay
// imporve details overlay
// seperate filter logic
// create transition variables
// responsiveness
// refactor code
// improve bookcard
