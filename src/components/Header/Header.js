// Named Imports
import { Title } from "../Title/Title";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Title />
      {/* <SearchBar/> */}
      <div className="nav-items">
        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
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
