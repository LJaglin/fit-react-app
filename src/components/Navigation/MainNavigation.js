import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

const mainNavigation = props => (
    <header className="main-navigation">
        <div className="main-navigation__logo">
            <h1>Your Fit App</h1>
        </div>
        <nav className="main-navigation__items">
            <ul>
                <li>
                    <NavLink to="/auth">Authenticate</NavLink>
                </li>
                <li>
                    <NavLink to="/bio">Bio</NavLink>
                </li>
                <li>
                    <NavLink to="/nutrition">Nutrition</NavLink>
                </li>
                <li>
                    <NavLink to="/training">Training</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default mainNavigation;