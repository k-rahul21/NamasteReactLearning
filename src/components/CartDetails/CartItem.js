import React from "react";
import AvailableOffer from "../AvailableOffer/AvailableOffer";
import CartItemCard from "./CartItemCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 cart-item-container p-3 border-r-2">
      <AvailableOffer />
      <div className="flex justify-between mt-3 mb-2 px-8">
        <div className="font-bold text-lg">{data.length} ITEMS ADDED</div>
        <button className="font-bold" onClick={handleClearCart}>
          REMOVE
        </button>
      </div>
      <div className="overflow-y-scroll no-scrollbar h-96 px-2">
        {data.map((dataa) => (
          <CartItemCard cartItem={dataa} />
        ))}
      </div>
    </div>
  );
};

export default CartItem;
