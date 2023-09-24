import React from "react";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../../utils/useRestrauntMenu";
import OngoingDiscountBanner from "../OngoingDiscountBanner/OngoingDiscountBanner";
import RestrauntMenuHeader from "../RestrauntMenuHeader/RestrauntMenuHeader";
import "./RestrauntMenu.scss";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestrauntMenu(resId);

  if (restaurantInfo === null) return <div>Nothing here to render.</div>;

  return (
    <div className="restraunt-menu-container">
      {/* <img src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} /> */}
      <RestrauntMenuHeader restaurantInfo={restaurantInfo} />
      <div className="dotted-line mt-10"></div>
      <OngoingDiscountBanner restaurantInfo={restaurantInfo} />
    </div>
  );
};

export default RestrauntMenu;
