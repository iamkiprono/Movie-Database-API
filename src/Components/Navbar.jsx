import { NavLink, Link } from "react-router-dom";

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
          <NavLink to="tvshows">TV Shows</NavLink>
          <NavLink to="search">Search</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
