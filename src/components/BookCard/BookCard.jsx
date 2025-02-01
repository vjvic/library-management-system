import "./BookCard.scss";
import { useState } from "react";
import Button from "../Button/Button";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Modal from "../Modal/Modal";
import BookDetail from "../BookDetail/BookDetail";

const BookCard = ({ book }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const { title, author, cover, description, pageNumber, rating, releaseDate } =
    book || {};

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  return (
    <>
      <div className="book-card">
        <img src={cover} alt={title} />
        <div className="details">
          <div>
            <h3 className="subtitle1">{title}</h3>
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
        />
      </Modal>
    </>
  );
};

export default BookCard;
