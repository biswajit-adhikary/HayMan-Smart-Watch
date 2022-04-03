import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink
                    className={({ isActive }) => isActive ? "active-link" : "link"} to="/">Home
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "active-link" : "link"} to="/reviews">Reviews
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "active-link" : "link"} to="/dashboard">Dashboard
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "active-link" : "link"} to="/blogs">Blogs
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "active-link" : "link"} to="/about">About
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;