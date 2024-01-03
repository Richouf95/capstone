import * as React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/" className="a">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="a">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="a">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" className="a">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order-online" className="a">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" className="a">
            Login
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
