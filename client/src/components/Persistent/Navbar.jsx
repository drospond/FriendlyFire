import React from "react";

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper" id="NavFooter">
        <a href="/dashboard" className="brand-logo center" id="FFheadText">
          FriendlyFire
        </a>
        {props.isLoggedIn ? (
          <>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <a href="/FindFriends" id="FFheadText">
                  Find a Friend
                </a>
              </li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/account" id="FFheadText">
                  Edit Profile
                </a>
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
