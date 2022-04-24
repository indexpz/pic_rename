import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css'
import logo from '../../Images/index_logo.svg'

export default function Header() {
    return (
        <div className="header--container">
            <a href="https://indexpz.pl"><img src={logo} alt="logo" className="header--logo"/></a>
            <ul>
                <li><a href="https://indexpz.pl" className='header--link'>Home</a></li>
                <li><NavLink to="/picRenamer/" className='header--link'>Pic Renamer</NavLink></li>
                <li><NavLink to="/picRenamer/info/" className='header--link'>Info</NavLink></li>
            </ul>
        </div>
    )
}