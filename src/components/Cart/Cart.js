import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartItem from "../CartDetails/CartItem";
import CartTotal from "../CartDetails/CartTotal";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.length > 0 ? (
    <div className="cart-container flex flex-row">
      <CartItem data={cartItems}></CartItem>
      <CartTotal data={cartItems}></CartTotal>
    </div>
  ) : (
    <EmptyCart />
  );
};

export default Cart;
