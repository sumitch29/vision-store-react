import "../../pages/homepage/Home.css";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header className="header-container">
        <h1 className="header-heading">
          <Link to="/">Vision Store</Link>
        </h1>
        <div className="header-link">
          <p className="home-link">
            <Link className="color-w" to="/">
              Home
            </Link>
          </p>
          <p className="doc-link">
            <Link className="color-w" to="/products">
              Store
            </Link>
          </p>
        </div>
        <div className="search-box center">
          <input
            className="padding-5 search"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="headerlink-nav">
          <Link className="color-w" to="/login">
            <i className="fas fa-user font-m headerlink-nav-icon center flex-column">
              Login
            </i>
          </Link>
          <Link className="color-w" to="/wishlist">
            <i className="fas fa-heart font-m headerlink-nav-icon center flex-column">
              Wishlist
            </i>
          </Link>
          <Link className="color-w" to="/cart">
            <i className="fas fa-shopping-cart font-m headerlink-nav-icon center flex-column">
              Cart
            </i>
          </Link>
        </div>
      </header>
    </div>
  );
};

export {Navbar};
