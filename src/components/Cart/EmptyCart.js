import React from "react";
import { Link } from "react-router-dom";
import emptyCartImg from "../../assets/img/emptyCart.webp";

const EmptyCart = () => {
  return (
    <div className="empty-container flex justify-center items-center w-full mb-36">
      <img className="empty-image" src={emptyCartImg} />
      <div className="p-5">
        <h3 className="mb-5">Your Cart is empty!</h3>
        <p className="leading-normal">
          Good food is always cooking! Go ahead, order some yummy items from the
          menu.
        </p>
        <button className="home-btn search-btn text-sm mt-6 p-3 bg-black">
          <Link className="text-white p-3 decoration-0" to="/">
            Order Something
          </Link>
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
