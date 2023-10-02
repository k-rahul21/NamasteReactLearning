import React from "react";
import { nudgeBanner } from "./constant";
import BannerCard from "./BannerCard/BannerCard";

const OngoingDiscountBanner = ({ restaurantInfo: { costForTwoMessage } }) => {
  return (
    <div className="mt-2">
      <div className="font-bold text-lg">{costForTwoMessage}</div>
      <div className="flex flex-row gap-3 overflow-x-auto scrollbar-none no-scrollbar">
        {nudgeBanner.map((banner) => (
          <BannerCard bannerInfo={banner}></BannerCard>
        ))}
      </div>
    </div>
  );
};

export default OngoingDiscountBanner;
