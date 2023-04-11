import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="movies">
            <h2>KiBrono📽️ </h2>
          </Link>
        </div>
        <div className="navlinks">
          <NavLink to="movies">Movies</NavLink>
          <NavLink to="tvshows">TV Shows</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
