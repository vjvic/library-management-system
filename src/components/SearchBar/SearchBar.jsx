import "./SearchBar.scss";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ placeholder, value, onChange, name }) => {
  return (
    <div className="input-wrapper">
      <BsSearch className="search-icon" size={16} />
      <input
        className="input-field"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default SearchBar;
