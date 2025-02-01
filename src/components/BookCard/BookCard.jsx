import "./BookCard.scss";
import { useState } from "react";
import Button from "../Button/Button";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Modal from "../Modal/Modal";
import BookDetail from "../BookDetail/BookDetail";
import LinesEllipsis from "react-lines-ellipsis";

const BookCard = ({ book }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const {
    title,
    author,
    cover,
    description,
    pageNumber,
    rating,
    releaseDate,
    isbn,
  } = book || {};

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  const TruncatedText = ({ text, maxLength }) => {
    const truncatedText =
      text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    return <span>{truncatedText}</span>;
  };

  return (
    <>
      <div className="book-card">
        <img src={cover} alt={title} />
        <div className="details">
          <div>
            <h3 className="subtitle1">
              {" "}
              <TruncatedText text={title} maxLength={16} />
            </h3>

            <p className="subtitle1">{author}</p>
          </div>

          <FavoriteButton />
        </div>
        <Button fullWidth onClick={handleButtonClick}>
          View Book
        </Button>
      </div>

      <Modal isOpen={showOverlay} onClose={() => setShowOverlay(false)}>
        <BookDetail
          cover={cover}
          title={title}
          author={author}
          description={description}
          pageNumber={pageNumber}
          rating={rating}
          releaseDate={releaseDate}
          isbn={isbn}
        />
      </Modal>
    </>
  );
};

export default BookCard;
