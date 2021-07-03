import React from "react"
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <ul>
            <li><NavLink
                exact
                to='/' className="NavLink"
                activeClassName="NavLink--active">
                Home
            </NavLink>
            </li>
            <li><NavLink to='/movies'
                className="NavLink"
                activeClassName="NavLink--active">
                Movies
            </NavLink>
            </li>
        </ul>
    )

}

export default Navigation;