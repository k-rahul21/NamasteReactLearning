import React from "react";

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
    isOpen,
    avgRating,
    totalRatings,
    totalRatingsString,
  },
}) => {
  return (
    <div className="restraunt-menu-header-container">
      <div className="flex flex-row justify-between align-center">
        <h1 className="text-black text-3xl text-normal">{name}</h1>
        <section className="pr-3">
          {avgRating && (
            <div className="flex align-center">
              <div className="mr-1 text-white text-sm font-bold px-3 py-2 rounded-md h-max bg-[#228b22]">
                {avgRating}
              </div>
              <div className="flex flex-col">
                <div className="text-sm">
                  {convertNumIntoString(totalRatings)}
                </div>
                <div className="text-xs text-custom-light-gray">
                  Delivery Reviews
                </div>
                <div className="dotted-line"></div>
              </div>
            </div>
          )}
        </section>
      </div>

      <div>
        <div className="text-lg mt-1 text-custom-dark-gray ">
          {cuisines?.join(", ")}
        </div>
        <div className="text-md flex flex-row text-custom-light-gray">
          {areaName && (
            <>
              <div className="flex">
                {areaName}
                {city && ","}
                {city && <div className="pl-1">{city}</div>}
              </div>
            </>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mt-1 text-red-500 text-base">
          {isOpen == true ? "Open now" : "Closed"}
        </div>
      )}
    </div>
  );
};

export default RestrauntMenuHeader;
