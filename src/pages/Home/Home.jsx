import "./Home.scss";
import { useState } from "react";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import Checkbox from "../../components/Checkbox/Checkbox";
import Dropdown from "../../components/Select/Dropdown";
import BookCard from "../../components/BookCard/BookCard";
import Pagination from "../../components/Pagination/Pagination";
import { useBookContext } from "../../context/BookContext";
import { filterUniqueYear } from "../../utils/helper";

const Home = () => {
  const { bookList, filteredBookList, filters, handleFilterChange } =
    useBookContext();

  const [isFilter, setIsFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 10;

  //filter unique years for dropdown
  filterUniqueYear(bookList);

  //pagination logic
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

  const checkBoxData = [
    { label: "Exact Matching", name: "exactMatch" },
    { label: "Authors", name: "author" },
    { label: "Publisher", name: "publisher" },
  ];

  return (
    <div>
      <section className="filter-section">
        <div className="search-wrapper">
          <SearchBar
            placeholder="Search by title, author, ISBN, publisher, md5..."
            value={filters.name}
            onChange={(e) => handleFilterChange("name", e.target.value)}
          />
          <Button textLight>Search</Button>

          <div className="book-numbers">
            <p>{filteredBookList.length} Books</p>
          </div>
        </div>

        {isFilter && (
          <div className="filters-wrapper">
            {checkBoxData.map((filter) => (
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
