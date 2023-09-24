import { useState } from "react";
import { Link } from "react-router-dom";
import useRestrauntsList from "../../utils/useRestrauntsList";
import RestaurantCard from "../RestrauntCard/RestrauntCard";
import SkeletonListing from "../Skeletonlisting/SkeletonListing";

const searchHandler = (searchText, restaurants) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const arrState = useState([{ name: "rahul" }]);
  // console.log("arr state", arrState);
  const resList = arrState[0];
  const setResList = arrState[1];
  // console.log("res list", resList);
  // console.log(" set res list", setResList);

  const [restaurants, filteredRestaurants] = useRestrauntsList();

  console.log("restaurants", restaurants);
  console.log("filtered restaurants", filteredRestaurants);

  if (!restaurants)
    return <div>No restaurants falls with your search text!!</div>;

  if (filteredRestaurants?.length === 0) return <SkeletonListing />;

  return restaurants.length === 0 ? (
    <SkeletonListing />
  ) : (
    <div className="body-section">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn text-14"
          onClick={() => {
            const data = searchHandler(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restraunt/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        ) : (
          <SkeletonListing />
        )}
      </div>
    </div>
  );
};

export default Body;
