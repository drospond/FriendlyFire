import React from 'react';

const Navbar = () => {
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">FriendlyFire</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="badges.html">Find a Friend</a></li> 
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/account">Username</a></li>
</ul>
        </div>
      </nav>
    );
};

export default Navbar;