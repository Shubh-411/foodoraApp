import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
// import { MENU_API_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  // Custom hook for fetching menu data -- it makes the code cleaner, more readable and reusable, modular
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (catergory) =>
        catergory.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("categories", categories);

  return (
    <div className="menu">
      <h1 className="res-name">{name}</h1>
      <h3 className="res-cuisine">{cuisines.join(",")}</h3>
      <h3 className="res-price">{costForTwoMessage}</h3>

      {/* Categories Accordions */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          />
        );
      })}

      {/* <h2>Menu</h2>
      <ul>
        {itemCards.length &&
          itemCards.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </li>
            );
          })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
