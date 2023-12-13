// Named Imports
import { Title } from "../Title/Title";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { ShoppingCart, User2, Wifi, WifiOff } from "lucide-react";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex overflow-hidden items-center justify-between fixed sticky top-0 z-50 my-3 p-5">
      <Title />
      {/* <SearchBar/> */}
      <div className="nav-items">
        <ul className="flex w-36 justify-between mr-3 ">
          <Link className="mx-1">
            <li className="text-white">
              {onlineStatus ? <Wifi /> : <WifiOff />}
            </li>
          </Link>
          <Link to="/cart">
            <li className="text-white flex flex-row">
              <ShoppingCart />
              <span className="relative bottom-4 right-4">
                {cartItems.length > 0 ? cartItems.length : null}
              </span>
            </li>
          </Link>
          <Link to="/login">
            <li style={{ color: "#FFF" }}>
              <User2 />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
