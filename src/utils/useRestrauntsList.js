import { useEffect, useState } from "react";
import { RESTRAUNT_LIST } from "./constants";

const useRestrauntsList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const response = await fetch(RESTRAUNT_LIST);
    const jsonResponse = await response.json();
    setRestaurants(
      jsonResponse?.data?.cards[2]?.card.card.gridElements?.infoWithStyle
        .restaurants
    ),
      setFilteredRestaurants(
        jsonResponse?.data?.cards[2]?.card.card.gridElements?.infoWithStyle
          .restaurants
      );
  };

  return [restaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestrauntsList;
