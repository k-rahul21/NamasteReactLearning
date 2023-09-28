import { useRouteError, Link } from "react-router-dom";
import emptyImage from "../../assets/img/emptyImage.webp";

const ErrorPage = () => {
  const err = useRouteError();
  const { status } = err;
  return (
    <div className="empty-container flex items-center justify-center w-full h-80 mt-48">
      <img className="empty-image" src={emptyImage} />
      <div className="p-5">
        <p className="leading-normal">
          {" "}
          This is a {status} page and we think it's fairly clear You aren't
          going to find what you're looking for here But we know you're hungry,
          so don't fret or rage Hit that big black button to go back to our
          homepage.{" "}
        </p>
        <button className="home-btn search-btn text-sm mt-6 p-3 bg-black">
          <Link className="text-white p-3 decoration-0" to="/">
            Back to home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
