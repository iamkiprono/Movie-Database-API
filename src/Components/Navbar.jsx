import { NavLink, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import getStkPush from "m-payedd";
import axios from "axios";
import { Buffer } from "buffer";
import { generateAccessToken } from "../../getToken";

const Navbar = () => {
  
  return (
    <div>
      <div>
        <button onClick={() => generateAccessToken()}>Pay now:</button>
      </div>
      <nav>
        <div className="logo">
          <Link to="/">
            <h2>BlobFlix📽️ </h2>
          </Link>
        </div>
        <div className="navlinks">
          <NavLink to="/">Movies</NavLink>
          <NavLink to="toprated">Top Rated Tv</NavLink>
          <NavLink to="sports">Sports</NavLink>
          <NavLink to="search">{FaSearch}</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
