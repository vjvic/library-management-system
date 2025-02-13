import Button from "../Button/Button";
import "./Pagination.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null; // dont display if page is <= 1

  return (
    <div className="pagination">
      {/* back button */}
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        iconLeft={<FaArrowLeft size={24} />}
        textLight
      >
        Back
      </Button>

      {/* dynamically create page */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`pagination-button ${
            // set active when current page match the page number in the loop
            currentPage === index + 1 ? "active" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
      {/* next button */}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        iconRight={<FaArrowRight size={24} />}
        textLight
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
