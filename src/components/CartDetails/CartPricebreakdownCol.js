import React from "react";

const CartPricebreakdownCol = ({ title, value, action, subTotal }) => {
  console.log("title", title);
  console.log("value", value);
  console.log("action", action);
  console.log("subTotal", subTotal);
  const calcValue = (subTotal, value, action) => {
    switch (action) {
      case "percentage":
        return (Number(subTotal) - (subTotal * value) / 100).toFixed(2);
      case "absolute":
        return (Number(subTotal) + value).toFixed(2);
      default:
        return subTotal;
    }
  };

  return (
    <div className="flex flex-row justify-between mr-16">
      <div>{title}</div>
      <div>{calcValue(subTotal, value, action)}</div>
    </div>
  );
};

export default CartPricebreakdownCol;
