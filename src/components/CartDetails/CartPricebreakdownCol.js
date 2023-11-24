import React from "react";

const CartPricebreakdownCol = ({ title, value }) => {
  return (
    <div className="flex flex-row justify-between mr-16">
      <div>{title}</div>
      <div>{value}</div>
    </div>
  );
};

export default CartPricebreakdownCol;
