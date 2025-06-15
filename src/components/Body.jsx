import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import listOfRestaurant from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { swiggy_api_URL } from "../utils/constant";
const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  // useEffect is a hook that runs after the component is mounted.
  // console.log("Body Rendered", resData);
  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log("NEwss", json);
    setResData(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // setting the filtered restaurant to the same data
    setFilteredRestaurant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <div className="body flex">
        <h1>
          Looks like you are offline !!! Please check your internet connection ;
        </h1>
      </div>
    );
  }

  // Conditional rendering ---- Shimmer UI Effect

  if (resData.length === 0) {
    return (
      // <div className="loading">
      //   <h1>
      //     {"Loading...".split("").map((char, idx) => (
      //       <span key={idx}>{char}</span>
      //     ))}
      //   </h1>
      // </div>
      <Shimmer />
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            data-testid="search-input"
            placeholder="Search"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = resData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
              // console.log("Filtered Data", filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let topRated = resData.filter((res) => res.info.avgRating > 4.3);
            // setResData(topRated);
            setFilteredRestaurant(topRated);
            console.log("Top Rated", topRated);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* =================== Restaurant card =================*/}
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {/* If the restaurant is promoted, then add a Promoted label to it. */}
              {restaurant.info.avgRating > 4.3 ? (
                <PromotedRestaurantCard resData={restaurant.info} />
              ) : (
                <RestaurantCard resData={restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
