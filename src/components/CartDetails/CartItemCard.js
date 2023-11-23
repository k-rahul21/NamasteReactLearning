import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { removeItems } from "../../utils/cartSlice";
import { X } from "lucide-react";

const CartItemCard = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleRemoveItemFromCart = (item) => {
    dispatch(removeItems(item));
  };
  return (
    <div className="my-2 pl-8 pr-3 py-3 border-2  drop-shadow-lg hover:drop-shadow-xl rounded flex flex-row justify-between">
      <div className="flex flex-col gap-1">
        <div>{cartItem?.name}</div>
        <div className="text-sm text-custom-dark-gray">
          Category: {cartItem?.category}
        </div>
        <div className="text-sm text-custom-dark-gray">QTY: 1</div>
        <div className="flex flex-row gap-2">
          <div className="price">₹ {cartItem?.price / 100}</div>{" "}
          {cartItem?.defaultPrice && (
            <div className="default-price text-custom-dark-gray line-through">
              ₹ {cartItem?.defaultPrice / 100}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <img
          src={IMG_CDN_URL + cartItem.imageId}
          className="h-24 w-28 rounded-lg"
        />
        <X
          className="cursor-pointer"
          onClick={() => handleRemoveItemFromCart(cartItem)}
        />
      </div>
    </div>
  );
};

export default CartItemCard;
