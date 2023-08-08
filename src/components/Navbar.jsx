import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='container-fluid'>
      <ul>
        <li>
          <NavLink to='/' className='contrast'>
            <strong>OSINT</strong>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
