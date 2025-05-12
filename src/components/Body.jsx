import RestaurantCard from "./RestaurantCard";
import listOfRestaurant from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect is a hook that runs after the component is mounted.
  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("NEwss", json);
    setResData(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
            type="search"
            placeholder="Search"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={() => {}}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let topRated = resData.filter((res) => res.info.avgRating > 4);
            setResData(topRated);
            console.log("Top Rated", topRated);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* Restaurant card */}
        {resData.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
