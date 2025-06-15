import React from "react";
import { IMAGE_CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Logic to add item to cart using dispatch action
    // dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          data-testid="foodItems"
          className="item-row"
        >
          <div className="item-header">
            <span>{item.card.info.name}</span>
            {/* <span>{"₹" + item.card.info.price / 100}</span> */}
            <span>
              {"₹"}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="item-description">{item.card.info.description}</p>
            {/* Add + Button */}
            <button className="add-btn" onClick={() => handleAddItem(item)}>
              Add +
            </button>
          </div>
          <img src={IMAGE_CDN_URL + item.card.info.imageId} alt="item-logo" />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
