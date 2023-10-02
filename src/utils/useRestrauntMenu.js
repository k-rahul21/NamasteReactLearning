import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (resId) => {
  const [restaurantInfo, setRestrauntInfo] = useState(null);
  const [restrauntMenu, setRestrauntMenu] = useState({});

  useEffect(() => {
    getRestrauntMenu();
  }, []);

  const getRestrauntCategory = (data) => {
    console.log("Dataaa", data);
    return data?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  };

  const getRestrauntMenu = async () => {
    const response = await fetch(MENU_API + resId + "&submitAction=ENTER");
    const jsonResponse = await response.json();
    console.log("response", jsonResponse);
    setRestrauntInfo(jsonResponse?.data?.cards?.[0]?.card?.card?.info);
    const categories = getRestrauntCategory(jsonResponse?.data?.cards[2]);
    console.log("category", categories);
    setRestrauntMenu(categories);
  };
  return [restaurantInfo, restrauntMenu];
};

export default useRestrauntMenu;
