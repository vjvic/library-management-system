import "./BookCard.scss";
import { useState } from "react";
import Button from "../Button/Button";
import { CiHeart } from "react-icons/ci";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const BookCard = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="book-card">
      <img
        src="https://images.pexels.com/photos/30386131/pexels-photo-30386131/free-photo-of-elegant-woman-in-dramatic-black-and-white-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="sad"
      />
      <div className="details">
        <div>
          <h3 className="subtitle1">Book Title</h3>
          <p className="subtitle1">Book Description</p>
        </div>

        <FavoriteButton />
      </div>
      <Button fullWidth onClick={handleButtonClick}>
        View Book
      </Button>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <div className="details-wrapper">
              <img
                src="https://images.pexels.com/photos/30386131/pexels-photo-30386131/free-photo-of-elegant-woman-in-dramatic-black-and-white-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="text"
              />
              <div className="details-info">
                <h4 className="title">Harry Potter</h4>
                <p className="author">J.K Rowling</p>
                <div className="detail-1">
                  <p className="body2">2017</p>
                  <p className="body2">224 pages</p>
                  <p className="body2">(Dark horse comics)</p>
                </div>
                <div className="detail-2">
                  <p className="body2">
                    EAN/ISBN13: 232312391293 UPC / iSBN10: 89219921
                  </p>
                </div>
                <div className="ratings">
                  <p className="body2">5.0</p>
                  <p className="body2">ratings</p>
                </div>
              </div>

              <div className="details-buttons">
                <FavoriteButton />
                <Button>Read</Button>
              </div>
            </div>

            <div className="description">
              <h5>Description</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                dolor voluptatibus nemo labore voluptate laboriosam molestias
                eveniet possimus dolorem, consequuntur vel eaque, ipsa facilis
                maiores unde, exercitationem nam? Repellendus quaerat, libero
                voluptatibus, nesciunt iste facilis quam harum excepturi
                deserunt eius non animi ad nam qui enim sapiente perspiciatis
                explicabo ipsum.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
