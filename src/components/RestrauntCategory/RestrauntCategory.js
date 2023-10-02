import React from "react";
import ItemList from "../ItemList/ItemList";

const RestrauntCategory = ({ menu, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems();
  };
  return (
    <div>
      <div className="w-full border border-custom-black p-4 shadow-lg my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {menu?.title} ({menu.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList item={menu.itemCards} />}
      </div>
    </div>
  );
};

export default RestrauntCategory;
