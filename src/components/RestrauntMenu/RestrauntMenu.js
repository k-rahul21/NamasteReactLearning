import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, MENU_API } from "../../utils/constants";
import OngoingDiscountBanner from "../OngoingDiscountBanner/OngoingDiscountBanner";
import RestrauntMenuHeader from "../RestrauntMenuHeader/RestrauntMenuHeader";
import "./RestrauntMenu.scss";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const [restaurantInfo, setRestrauntInfo] = useState({});
  const [restrauntMenu, setRestrauntMenu] = useState({});

  useEffect(() => {
    getRestrauntMenu();
  }, []);

  const getRestrauntMenu = async () => {
    const restrauntInfo = await fetch(MENU_API + resId + "&submitAction=ENTER");
    const response = await restrauntInfo.json();
    setRestrauntMenu(
      response?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR
    );
    setRestrauntInfo(response?.data?.cards?.[0]?.card?.card?.info);
  };

  console.log("restrauntMenu", restrauntMenu);
  console.log("res info", restaurantInfo);

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
