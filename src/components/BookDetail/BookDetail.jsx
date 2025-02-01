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
          <div className="ratings">
            <Rating initialValue={rating} readonly size={20} />
            <p className="body2">{rating?.toFixed(1)} ratings</p>
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
