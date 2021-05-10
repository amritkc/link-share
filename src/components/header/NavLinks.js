/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item '>
          <NavLink
            className='nav-link '
            to='/repair'
            activeStyle={{
              fontWeight: "bold",
              color: "#1a73e8",
            }}>
            Repair Price
          </NavLink>
        </li>
        <li className='nav-item'>
          <a className='nav-link ' href='#'>
            Become a Vendor
          </a>
        </li>
        <li className='nav-item'>
          <NavLink
            className='nav-link '
            to='/Get-in-touch'
            activeStyle={{
              fontWeight: "bold",
              color: "#1a73e8",
            }}>
            Get in touch
          </NavLink>
        </li>
        <span
          className='spandot'
          style={{
            width: "3px",
            height: "18px",
            padding: "8px",
            marginRight: "8px",
            color: "black",
          }}>
          |
        </span>
        <li className='nav-item asdasd'>
          <NavLink
            className='nav-link '
            to='/Signin'
            activeStyle={{
              fontWeight: "bold",
              color: "#1a73e8",
            }}>
            Sign In
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/signup'
            activeStyle={{
              fontWeight: "bold",
              color: "#1a73e8",
            }}>
            <button className='button_signin' href='#'>
              Join <span className='free_bold'>Free</span>
            </button>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
