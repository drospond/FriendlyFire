import React from 'react';

const Navbar = () => {
    return (
        <nav>
        <div className="nav-wrapper" id="NavFooter">
          <a href="/" className="brand-logo center" id="FFheadText">FriendlyFire</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="/FindFriends" id="FFheadText">Find a Friend</a></li> 
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/account" id="FFheadText">Username</a></li>
</ul>
        </div>
      </nav>
    );
};

export default Navbar;