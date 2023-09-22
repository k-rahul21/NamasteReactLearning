import React from "react";
import "./RestrauntMenuHeader.scss";

const convertNumIntoString = (number) => {
  let numberStr = number?.toString();
  numberStr = numberStr?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return numberStr;
};

const RestrauntMenuHeader = ({
  restaurantInfo: {
    name,
    cuisines,
    areaName,
    city,
    availability,
    avgRating,
    totalRatings,
    totalRatingsString,
  },
}) => {
  return (
    <div className="restraunt-menu-header-container">
      <div className="restraunt-main-info flex flex-row flex-space-btw align-center">
        <h1 className="restraunt-name">{name}</h1>
        <section className="restraunt-review-section pr-10">
          {avgRating && (
            <div className="delivery-review flex align-center">
              <div className="avg-rating mr-5">{avgRating}</div>
              <div className="flex flex-col">
                <div className="review-in-num">
                  {convertNumIntoString(totalRatings)}
                </div>
                <div className="review-desc">Delivery Reviews</div>
                <div className="dotted-line"></div>
              </div>
            </div>
          )}
        </section>
      </div>

      <div className="restraunt-info">
        <div className="restraunt-cuisines">{cuisines?.join(", ")}</div>
        <div className="restraunt-location flex flex-row">
          <div>{areaName}</div>
          {city && (
            <>
              <div>,</div>
              <div className="pl-5">{city}</div>
            </>
          )}
        </div>
      </div>
      {availability && (
        <div className="restraunt-time mt-10">
          {availability?.opened == true ? "Open now" : "Closed"}
        </div>
      )}
    </div>
  );
};

export default RestrauntMenuHeader;
