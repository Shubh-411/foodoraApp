import { IMAGE_CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  // console.log("card data", resData);
  const { name, cuisines, avgRating, cloudinaryImageId } = resData; //optional chaining
  return (
    <div data-testid="resCard" className="res-card">
      <img
        src={IMAGE_CDN_URL + cloudinaryImageId}
        alt="Restaurant-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <p>Delivery: 30mins</p>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard ===> PromotedRestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="promote">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
