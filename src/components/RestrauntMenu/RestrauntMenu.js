import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../../utils/useRestrauntMenu";
import OngoingDiscountBanner from "../OngoingDiscountBanner/OngoingDiscountBanner";
import RestrauntCategory from "../RestrauntCategory/RestrauntCategory";
import RestrauntMenuHeader from "../RestrauntMenuHeader/RestrauntMenuHeader";
import RestrauntPageSkeleton from "../RestrauntPageSkeleton/RestrauntPageSkeleton";
import "./RestrauntMenu.scss";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const [showItems, setShowItems] = useState("");
  const [restaurantInfo, restrauntMenu] = useRestrauntMenu(resId);

  if (!restaurantInfo) return <RestrauntPageSkeleton />;

  return (
    <div className="restraunt-menu-container w-7/12 m-auto">
      <RestrauntMenuHeader restaurantInfo={restaurantInfo} />
      <div className="dotted-line mt-2"></div>
      <OngoingDiscountBanner restaurantInfo={restaurantInfo} />
      <div className="dotted-line mt-2"></div>
      {restrauntMenu.map((menu, index) => (
        <RestrauntCategory
          menu={menu.card.card}
          key={menu.card.card.title}
          showItems={index === showItems}
          setShowItems={() => setShowItems(index)}
        />
      ))}
    </div>
  );
};

export default RestrauntMenu;
