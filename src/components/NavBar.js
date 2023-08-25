import React from 'react'
import '../styles/nav.css';
import {Link} from "react-router-dom";


const NavBar = () => {
  return (
    <nav>
        <h1>
          <Link to="/"> Dil ki Garden </Link>
        </h1>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;