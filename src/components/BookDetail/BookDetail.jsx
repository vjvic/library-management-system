import { Rating } from "react-simple-star-rating";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Button from "../Button/Button";
import "./BookDetail.scss";

const BookDetail = ({
  cover,
  title,
  author,
  releaseDate,
  pageNumber,
  rating,
  description,
  isbn,
}) => {
  return (
    <>
      <div className="details-wrapper">
        <img src={cover} alt={title} />
        <div className="details-info">
          <h4 className="title">{title}</h4>
          <p className="author">{author}</p>
          <div className="detail-1">
            <p className="body2">{releaseDate}</p>
            <p className="body2">{pageNumber} pages</p>
          </div>
          <div>
            <p className="body2">{isbn}</p>
          </div>
          <div className="ratings">
            <div>
              <Rating initialValue={rating} readonly size={20} />
              <span>{rating?.toFixed(1)} </span>
            </div>
            <p className="body2">Ratings</p>
          </div>
        </div>
        <div className="details-buttons">
          <FavoriteButton />
          <Button>Read</Button>
        </div>
      </div>
      <div className="description">
        <h5>Description</h5>
        <p>{description}</p>
      </div>
    </>
  );
};

export default BookDetail;
