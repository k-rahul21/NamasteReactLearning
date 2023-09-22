import React from "react";
import "./OngoingDiscountBanner.scss";
import { nudgeBanner } from "./constant";
import BannerCard from "./BannerCard/BannerCard";

const OngoingDiscountBanner = ({ restaurantInfo: { costForTwoMessage } }) => {
  return (
    <div className="Discount-banner-container mt-10">
      <div className="cost-for-two font-bold">{costForTwoMessage}</div>
      <div className="banner-container flex flex-row flex-gap-10">
        {nudgeBanner.map((banner) => (
          <BannerCard bannerInfo={banner}></BannerCard>
        ))}
      </div>
    </div>
  );
};

export default OngoingDiscountBanner;
