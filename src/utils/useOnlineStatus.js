import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("You are online");
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      console.log("You are offline");
      setOnlineStatus(false);
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
