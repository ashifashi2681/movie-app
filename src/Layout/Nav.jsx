import React from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "/images/logo.png"
import "../styles/nav.css"
import { HiHeart, HiOutlineSearch, HiUser } from "react-icons/hi"

function Nav() {
  return (
    <div className="n-container">
      <div className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="n-input">
        <span>
          <HiOutlineSearch />
        </span>
        <input type="search" placeholder="Enter Your Show..." />
      </div>
      <div className="n-links">
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <NavLink to="/login">
          <span>
            <HiUser />
          </span>
        </NavLink>
        <NavLink to="/favorites">
          <span>
            <HiHeart />
          </span>
          <div className="badge">3</div>
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
