// Image CDN (static, less likely to break)
export const IMAGE_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Swiggy API (dynamic, prone to 403/CORS)
export const swiggy_api_URL =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

export const LOGO = new URL("../../public/foodoraApp.png", import.meta.url);

// MENU API

export const MENU_API_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4544513&lng=78.3946279&restaurantId=";

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4544513&lng=78.3946279&restaurantId=608605&catalog_qa=undefined&submitAction=ENTER
