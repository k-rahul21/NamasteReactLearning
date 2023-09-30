// Named Imports
import { Title } from "../Title/Title";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex overflow-hidden items-center justify-between fixed sticky top-0 z-50 my-3 p-5">
      <Title />
      {/* <SearchBar/> */}
      <div className="nav-items">
        <ul className="flex w-64 justify-between mr-5 ">
          <Link className="">
            <li className="text-white">
              Online Status : {onlineStatus ? "✅" : "❌"}
            </li>
          </Link>
          {/* <Link to="/about">
            <li>About</li>
          </Link> */}
          {/* <Link to="/contact">
            <li>Contact</li>
          </Link> */}
          <Link to="/cart">
            <li className="text-white">Cart</li>
          </Link>
          <Link to="/login">
            <li style={{ color: "#D80032" }}>Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
