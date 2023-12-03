import React from "react";
import { Salad } from "lucide-react";
import { pricebreakdownCol } from "./constant";
import CartPricebreakdownCol from "./CartPricebreakdownCol";

const CartTotal = ({ data }) => {
  if (data.length === 1) {
    return data[0].price / 100;
  }

  const calcTotalCartValue = (cartItem) => {
    return cartItem
      .reduce((acc, curr) => acc.price / 100 + curr.price / 100)
      .toFixed(2);
  };

  console.log(calcTotalCartValue(data));
  return (
    <div className="w-6/12 p-3 cart-total-container">
      <div className="flex flex-row">
        <h1 className="text-lg pb-2 ml-2 mr-2">YOUR CART </h1>
        <Salad />
        <div className="border-r-2 w-3" />
        <div className="text-md ml-2 mt-1"> ₹ {calcTotalCartValue(data)}</div>
      </div>
      <div className="border-b-2 pt-1 pb-3 px-8 ml-1 mr-16"></div>
      <div className="flex flex-row mb-2 ml-2 mt-4">
        <div className="font-bold text-lg ">PRICE BREAKDOWN</div>
        <div className="border-r-2 w-3" />
        <div className="font-bold text-lg ml-2">{data.length} ITEMS</div>
      </div>
      <div className="flex flex-col ml-2 mt-5 leading-8">
        {console.log("pricebreakdownCol", pricebreakdownCol)}
        {pricebreakdownCol.map((priceCol) => (
          <CartPricebreakdownCol
            {...priceCol}
            subTotal={calcTotalCartValue(data)}
          />
        ))}
        <div className="border-b-2 pt-1 pb-3 px-8 ml-1 mr-16"></div>
        <div className="flex flex-row justify-between mr-16 mt-4">
          <div className="font-bold">Amount to be paid</div>
          <div className="font-bold">1000</div>
        </div>
        <div className="border-b-2 pt-1 pb-3 px-8 ml-1 mr-16"></div>
      </div>
    </div>
  );
};

export default CartTotal;
