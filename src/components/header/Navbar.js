/** @format */

import React from "react";
import NavLinks from "./NavLinks";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo_link.png";

const Navbar = () => {
  return (
    <>
      <div className='sticky-top nav_top_bar'>
        <nav
          class='navbar sticky-top navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white'
          style={{
            marginTop: "20px",
          }}>
          <div
            style={{
              textDecoration: "none",
              cursor: "context-menu",
              width: "150px",
              minHeight: "60px",
            }}>
            <Link to='/'>
              <img
                src={logo}
                className='imgdata'
                style={{
                  marginTop: "3px",
                  marginBottom: "10px",
                }}
                alt='linkshare'
                height='45px'
                width='45px'
              />
            </Link>
            <h6
              style={{
                fontWeight:"900",
                textAlign: "center",
                color: "#1273EB",
                marginLeft: "40px",
                fontSize: "20px",
                marginTop: "-40px",
              }}>
              Link.share
            </h6>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <NavLinks />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
