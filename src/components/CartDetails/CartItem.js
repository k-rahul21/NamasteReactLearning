import React from "react";
import AvailableOffer from "../AvailableOffer/AvailableOffer";

const CartItem = ({ data }) => {
  console.log("cartItem", data);
  return (
    <div className="w-6/12 border-2 border-custom-light-gray cart-item-container p-3">
      <AvailableOffer />
      <div className="flex justify-between m-2 px-8">
        <div className="font-bold text-lg">{data.length} ITEMS ADDED</div>
        <button className="font-bold">REMOVE</button>
      </div>
    </div>
  );
};

export default CartItem;
