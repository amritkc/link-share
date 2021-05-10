/** @format */

import React from "react";
import NavLinks from "./NavLinks";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

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
              width: "110px",
            }}>
            <Link to='/'>
              <img
                className='imgdata'
                style={{
                  marginTop: "3px",
                  marginBottom: "10px",
                }}
                alt='repzy'
                height='45px'
                width='140px'
              />
              <br />
            </Link>
            <h6
              style={{
                textAlign: "center",
                color: "#808080",
                fontSize: "13px",
                marginTop: "-5px",
              }}>
              REPAIR INTEL
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
