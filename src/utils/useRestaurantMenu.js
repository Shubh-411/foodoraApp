import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constant";
const useRestaurantMenu = (resId) => {
  // fetchData
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API_URL + resId);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      //  console.log("menu", json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };
  return resInfo;
};
export default useRestaurantMenu;
