import React from "react";

const BannerCard = ({ bannerInfo }) => {
  const { discountInfo, couponCode, minValue } = bannerInfo;
  const isFlatDiscount = discountInfo.discountType == "Flat";
  const discountText = isFlatDiscount
    ? `Rs ${discountInfo.value} OFF`
    : `${discountInfo.value} % OFF`;

  return (
    <div className="banner-card font-bold flex flex-col mt-2 p-2 rounded-lg w-80 min-w-max border border-custom-light-gray no-scrollbar">
      <div className="text-red">FLAT {discountText}</div>
      <div className="banner-coupon-info text-grey">
        USE {couponCode} | ABOVE Rs. {minValue}
      </div>
    </div>
  );
};

export default BannerCard;
