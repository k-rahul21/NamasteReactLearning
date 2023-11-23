import React from "react";
import { Salad } from "lucide-react";
import { pricebreakdownCol } from "./constant";
import CartPricebreakdownCol from "./CartPricebreakdownCol";

const CartTotal = ({ data }) => {
  return (
    <div className="w-6/12 p-3 cart-total-container">
      <div className="flex flex-row">
        <h1 className="text-lg pb-2 ml-2 mr-2">YOUR CART </h1>
        <Salad />
        <div className="border-r-2 w-3" />
        <div className="text-md ml-2 mt-1"> ₹ 500</div>
      </div>
      <div className="border-b-2 pt-1 pb-3 px-8 ml-4 mr-20"></div>
      <div className="flex flex-row mb-2 ml-2 mt-4">
        <div className="font-bold text-lg ">PRICE BREAKDOWN</div>
        <div className="border-r-2 w-3" />
        <div className="font-bold text-lg ml-2">{data.length} ITEMS</div>
      </div>
      <div className="flex flex-col ml-2 mt-5 leading-8">
        {pricebreakdownCol.map((priceCol) => (
          <CartPricebreakdownCol props={priceCol} />
        ))}
      </div>
    </div>
  );
};

export default CartTotal;
