import { IMAGE_CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  console.log("card data", resData);
  const { name, cuisines, avgRating, cloudinaryImageId } = resData; //optional chaining
  return (
    <div className="res-card">
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

export default RestaurantCard;
