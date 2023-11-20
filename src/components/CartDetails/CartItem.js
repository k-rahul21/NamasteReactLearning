import React from "react";
import AvailableOffer from "../AvailableOffer/AvailableOffer";
import CartItemCard from "./CartItemCard";

const CartItem = ({ data }) => {
  return (
    <div className="w-6/12 cart-item-container p-3 border-r-2">
      <AvailableOffer />
      <div className="flex justify-between my-2 px-8">
        <div className="font-bold text-lg">{data.length} ITEMS ADDED</div>
        <button className="font-bold">REMOVE</button>
      </div>
      <div className="overflow-y-scroll h-96 px-2">
        {data.map((dataa) => (
          <CartItemCard cartItem={dataa} />
        ))}
      </div>
    </div>
  );
};

export default CartItem;
