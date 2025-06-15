import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="category">
      {/* header */}
      <div className="category-header" onClick={handleClick}>
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/* accordion body */}
      {showItems && (
        <div className="category-body">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
