import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // console.log("render!!");
  const arrState = useState([{ name: "rahul" }]);
  // console.log("arr state", arrState);
  const resList = arrState[0];
  const setResList = arrState[1];
  // console.log("res list", resList);
  // console.log(" set res list", setResList);

  useEffect(() => {
    getRestaurants();
    // console.log("calling useEffect!");
  }, []);

  // async function getRestaurants() {
  //   await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  //   )
  //     .then((response) => response.json())
  //     .then(
  //       (data) => (
  //         setRestaurants(
  //           data?.data?.cards[2]?.card.card.gridElements?.infoWithStyle
  //             .restaurants
  //         ),
  //         setFilteredRestaurants(
  //           data?.data?.cards[2]?.card.card.gridElements?.infoWithStyle
  //             .restaurants
  //         )
  //       )
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  const getRestaurants = async () => {
    const fetchData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const JsonData = await fetchData.json();
    setRestaurants(
      JsonData?.data?.cards[2]?.card.card.gridElements?.infoWithStyle
        .restaurants
    ),
      setFilteredRestaurants(
        JsonData?.data?.cards[2]?.card.card.gridElements?.infoWithStyle
          .restaurants
      );
  };

  // console.log("restaurants", restaurants);
  // console.log("filtered restaurants", filteredRestaurants);

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
