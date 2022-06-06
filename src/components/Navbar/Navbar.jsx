import React from "react";

// use react-router Link or NavLink
const Link = <a />;

const Navbar = () => {
  return (
    <div data-cy="navbar" style="padding: 10px; display: flex; gap: 20px; justify-content: space-between " >
      <Link data-cy="navbar-home-link"> Logo </Link>
      <span data-cy="navbar-cart-items-count">{/* count here */} 
      
        "Cart: " "(3)"
      </span>
      <button data-cy="navbar-login-logout-button"> Logout </button>
    </div>
  );
};

export default Navbar;
