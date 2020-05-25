import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper" id="NavFooter">
        <Link to={`/dashboard/${props.userObject.id}`} className="brand-logo center" id="FFheadText">
          FriendlyFire
        </Link>
        {props.isLoggedIn ? (
          <>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <Link to={`/FindFriends/${props.userObject.id}`} id="FFheadText">
                  Find a Friend
                </Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to={`/account/${props.userObject.id}`} id="FFheadText">
                  {props.userObject.handle}
                </Link>
              </li>
              <li onClick={props.logOutUser}>
                <a href="/">Sign Out</a>
              </li>
            </ul>
          </>
        ) : (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
