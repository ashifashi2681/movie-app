import React from "react"
import { NavLink } from "react-router-dom"
import logo from "/images/logo.png"
import "../styles/Footer.css"
function Footer() {
  const Links = [
    {
      title: "Company",
      links: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "About Us",
          link: "/about-us"
        },
        {
          name: "Contact Us",
          link: "/contact-us"
        },
        {
          name: "Movies",
          link: "/movies"
        }
      ]
    },
    {
      title: "Top Categories",
      links: [
        {
          name: "Action",
          link: "#"
        },
        {
          name: "Comedy",
          link: "#"
        },
        {
          name: "Horror",
          link: "#"
        },
        {
          name: "Thriller",
          link: "#"
        }
      ]
    },
    {
      title: "My Account",
      links: [
        {
          name: "Dashboard",
          link: "/dashboard"
        },
        {
          name: "My Favourites",
          link: "/favorites"
        },
        {
          name: "Profile",
          link: "/profile"
        },
        {
          name: "Change Password",
          link: "/password"
        }
      ]
    }
  ]
  return (
    <div className="footer-container">
      <div className="footer-grid">
        {Links.map((link, i) => (
          <div key={i}>
            <h4>{link.title}</h4>
            <div className="footer-links">
              {link.links.map((link, index) => (
                <NavLink key={index} to={link.link}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
        <div className="f-logo">
          <img src={logo} />
          <p>E-Mail: ashifashi2681@gmail.com</p>
          <p>© 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
