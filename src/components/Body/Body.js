import { Link } from "react-router-dom";
import useRestrauntsList from "../../utils/useRestrauntsList";
import useOnlineStatus from "../../utils/useOnlineStatus";
import RestaurantCard, {
  withPromotedLabel,
} from "../RestrauntCard/RestrauntCard";
import SkeletonListing from "../Skeletonlisting/SkeletonListing";
import SearchBar from "../SearchBar/SearchBar";

const Body = () => {
  const [restaurants, filteredRestaurants, setFilteredRestaurants] =
    useRestrauntsList();
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
      <SearchBar
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="flex flex-wrap gap-5 mt-5">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restraunt/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {restaurant.info?.isPromoted ? (
                  <RestaurantCardPromoted {...restaurant.info} />
                ) : (
                  <RestaurantCard {...restaurant.info} />
                )}
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
