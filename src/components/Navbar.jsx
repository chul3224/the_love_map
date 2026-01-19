import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
        홈
      </NavLink>
      <NavLink to="/quiz" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        테스트
      </NavLink>
      <NavLink to="/articles" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        아티클
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        소개
      </NavLink>
    </nav>
  );
}

export default Navbar;
