import { useState, useEffect, useRef } from "react";
import "./Dropdown.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dropdown = ({
  options,
  bordered = false,
  placeholder = "Select an option",
  onChange,
  size,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // References the dropdown DOM element
  const [option, setOption] = useState();

  const sizeClass =
    size === "small"
      ? "dropdown--small"
      : size === "large"
      ? "dropdown--large"
      : "";

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    onChange({ target: { value: option } }); // Triggers the parent onChange
    setIsOpen(false); // Closes the dropdown
    setOption(option); // Updates the selected option
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Closes if the click is outside the dropdown
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`dropdown ${
        bordered ? "bordered" : "borderless"
      } ${sizeClass}`}
    >
      <div className="dropdown-header" onClick={toggleDropdown}>
        {option ? option : placeholder}
        {isOpen ? (
          <FaChevronUp className="dropdown-icon" />
        ) : (
          <FaChevronDown className="dropdown-icon" />
        )}
      </div>
      <div
        className={`dropdown-list-wrapper ${isOpen ? "open" : "closed"} ${
          bordered ? "bordered" : "borderless"
        }`}
      >
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
