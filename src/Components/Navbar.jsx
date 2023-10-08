import { NavLink, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import getStkPush from "m-payedd"
import axios from "axios"
import { Buffer } from "buffer";

const Navbar = () => {

const consumerKey = '0nAGDytY6nVj33yeIbTC8g3HQZ6SFW1A';
const consumerSecret = 'HGO2aPHYyhK2Yo6T';

const generateAccessToken = async () => {
  let buf = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
    "base64"
  );
  // authentication string
  let auth = `Basic ${buf}`;
  try {
    const response = await fetch('https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      headers: {
        Authorization: auth,
      },
    });
    const accessToken = await response.json()
    console.log(accessToken);
    return accessToken;
  } catch (error) {
    console.log({err:error});
  }
};



  
  return (
    <div>
      <div>
        <button onClick={()=>generateAccessToken()}>Pay</button>
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
