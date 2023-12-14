import { Link } from "react-router-dom";
import foodyMoody from "../../assets/img/foodyMoody.png";

export const Title = () => (
  <Link to="/">
    <img className="title-logo" src={foodyMoody} />
  </Link>
);
