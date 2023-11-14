import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.length > 0 ? (
    cartItems.map((item) => <div>{item?.name}</div>)
  ) : (
    <EmptyCart />
  );
};

export default Cart;
