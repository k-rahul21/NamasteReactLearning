import { useState } from "react";
import { Link } from "react-router-dom";
import useRestrauntsList from "../../utils/useRestrauntsList";
import useOnlineStatus from "../../utils/useOnlineStatus";
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
  const onlineStatus = useOnlineStatus();

  console.log("restaurants", restaurants);
  console.log("filtered restaurants", filteredRestaurants);

  if (onlineStatus === false)
    return <div>Oops, Seems like you're offline.</div>;

  if (!restaurants)
    return <div>No restaurants falls with your search text!!</div>;

  if (filteredRestaurants?.length === 0) return <SkeletonListing />;

  return restaurants.length === 0 ? (
    <SkeletonListing />
  ) : (
    <div className="body-section">
      <div className="flex gap-2">
        <input
          type="text"
          className="ml-5 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-1/4 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-black text-sm text-white px-5 py-2"
          onClick={() => {
            const data = searchHandler(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-5 mt-5">
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
