import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black flex mt-5 p-5 justify-between items-center overflow-hidden text-white">
      <Link to="/" className="decoration-0 text-white">
        <p className="border-2 py-3 px-5">About Foody Moody</p>
      </Link>
      <p className="border-2 py-3 px-5">&#169; 2023</p>
      <p className="border-2 py-3 px-5">India</p>
    </div>
  );
};

export default Footer;
