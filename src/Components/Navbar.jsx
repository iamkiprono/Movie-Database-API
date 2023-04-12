import { NavLink, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <h2>KiBrono📽️ </h2>
          </Link>
        </div>
        <div className="navlinks">
          <NavLink to="/">Movies</NavLink>
          <NavLink to="toprated">Top Rated</NavLink>
          <NavLink to="search">{FaSearch}</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
