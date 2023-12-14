import { IMG_CDN_URL } from "../../utils/constants";

const RestaurantCard = ({
  avgRating,
  aggregatedDiscountInfo,
  name,
  cuisines,
  costForTwo,
  deliveryTime,
  cloudinaryImageId,
  id,
}) => {
  return (
    <div className="restaurant-card w-52 p-3 cursor-pointer hover:shadow-lg rounded-md break-words  hover:shadow-slate-950">
      <img
        className="rounded-md w-full"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <div className="break-words text-slate-900 text-lg">{name}</div>
      <div className=" mt-1 text-sm text-slate-600">{cuisines.join(", ")}</div>
      <div className="flex justify-between items-center text-slate-600 mt-4 text-xs">
        {avgRating !== "--" && (
          <div className="product-rating">⭐{avgRating}</div>
        )}
        <div className="product-delivery-time">{deliveryTime} MINS</div>
        <div className="product-cost">{costForTwo} </div>
      </div>
      {aggregatedDiscountInfo?.descriptionList?.[0].meta && (
        <>
          <div className="product-ongoing-offer">
            {aggregatedDiscountInfo?.descriptionList?.[0].meta}
          </div>
        </>
      )}
    </div>
  );
};

// HOC - Higher Order Component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white text-xs p-2 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
