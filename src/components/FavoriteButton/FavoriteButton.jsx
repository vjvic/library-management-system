import { CiHeart } from "react-icons/ci";
import "./FavoriteButton.scss";
{
  /* this action button is static */
}
const FavoriteButton = () => {
  return (
    <button className="favorites-button">
      <CiHeart size={24} />
    </button>
  );
};

export default FavoriteButton;
