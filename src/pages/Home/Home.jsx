import "./Home.scss";
import { useState } from "react";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import Checkbox from "../../components/Checkbox/Checkbox";
import Dropdown from "../../components/Select/Dropdown";
import BookCard from "../../components/BookCard/BookCard";

const Home = () => {
  const [isFilter, setIsFilter] = useState();

  return (
    <div>
      <section className="filter-section">
        <div className="search-wrapper">
          <SearchBar placeholder="search book..." />
          <Button>Search</Button>

          <div className="book-numbers">
            <p>20,000,0000 Books</p>
          </div>
        </div>

        {isFilter ? (
          <div className="filters-wrapper">
            <Checkbox label="Exact Matching" />
            <Checkbox label="Authors" />
            <Checkbox label="Publisher" />
            <Dropdown
              placeholder="Year From"
              bordered={true}
              options={["test", "test"]}
            />
            <Dropdown
              placeholder="Year to"
              bordered={true}
              options={["test", "test"]}
            />
            <Dropdown
              placeholder="Year From"
              bordered={true}
              options={["test", "test"]}
            />
            <Dropdown
              placeholder="Selected Languages"
              bordered={true}
              options={["test", "test"]}
            />
          </div>
        ) : (
          <div className="search-filter-button">
            <button onClick={() => setIsFilter(!isFilter)}>
              Search Option
            </button>
          </div>
        )}
      </section>

      <section className="book-section">
        <div className="filter-book">
          <Dropdown
            placeholder="Filter by"
            bordered={false}
            options={["test", "test"]}
          />
          <Dropdown
            placeholder="Sort by"
            bordered={false}
            options={["test", "test"]}
          />
        </div>

        <div className="books-wrapper">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </section>
    </div>
  );
};

export default Home;
