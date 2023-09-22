import React from "react";

const BannerCard = ({ bannerInfo }) => {
  return (
    <div className="banner-card font-bold flex flex-col mt-10 p-10 ">
      <div className="text-red">
        {" "}
        FLAT{" "}
        {bannerInfo.discountInfo.discountType == "Flat"
          ? `Rs ${bannerInfo.discountInfo.value} OFF`
          : `${bannerInfo.discountInfo.value} % OFF`}{" "}
      </div>
      <div className="banner-coupon-info text-grey">
        {" "}
        USE {bannerInfo.couponCode} | ABOVE Rs. {bannerInfo.minValue}
      </div>
    </div>
  );
};

export default BannerCard;
