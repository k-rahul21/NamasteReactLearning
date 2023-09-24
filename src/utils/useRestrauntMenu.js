import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (resId) => {
  const [restaurantInfo, setRestrauntInfo] = useState(null);
  const [restrauntMenu, setRestrauntMenu] = useState({});

  useEffect(() => {
    getRestrauntMenu();
  }, []);

  const getRestrauntMenu = async () => {
    const response = await fetch(MENU_API + resId + "&submitAction=ENTER");
    const jsonResponse = await response.json();
    setRestrauntInfo(jsonResponse?.data?.cards?.[0]?.card?.card?.info);
    setRestrauntMenu(
      response?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR
    );
  };
  return restaurantInfo;
};

export default useRestrauntMenu;
