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
import { BiHomeAlt } from "react-icons/bi";

const Home = () => {
  // book context
  const {
    bookList,
    filteredBookList,
    filters,
    handleFilterChange,
    handleSortChange,
    sortOption,
  } = useBookContext();

  const [isFilter, setIsFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  //filter unique years
  // option value for dropdown
  const uniqueYears = filterUniqueYear(bookList);

  //pagination logic
  const booksPerPage = 5; // 10 book limit per page
  const totalPages = Math.ceil(filteredBookList.length / booksPerPage); //calculate the total page example we have 100 books totalpage is 10
  const displayedBooks = filteredBookList.slice(
    // this is the book list after filter and paginate
    (currentPage - 1) * booksPerPage, //start
    currentPage * booksPerPage //end
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // checkbox data label and name
  const checkBoxData = [
    { label: "Exact Matching", name: "exactMatch" },
    { label: "Authors", name: "author" },
    { label: "Publisher", name: "publisher" },
  ];

  return (
    <div>
      {/* this is display only not the actual breadcrumb */}
      <div className="breadcrumb">
        <BiHomeAlt />
        Home
      </div>
      {/* filter section */}
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

        {/* only show filter if filter is click  */}
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

      {/* Book section */}
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
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value.toLowerCase())}
          />
        </div>
        <div className="books-wrapper">
          {displayedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        {/* only show the pagination if page is > than 1 */}
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
// seperate section
