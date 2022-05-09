import React, {useContext} from 'react'
import {NavLink} from "react-router-dom";
import './Header.css'
import logo from '../../Images/index_logo.svg'


export default function Header() {

// console.log(window.location.href);

    return (

        <div className="header--container">
            <a href="https://indexpz.pl"><img src={logo} alt="logo" className="header--logo"/></a>
            <ul>
                <li><a href="https://indexpz.pl" className='header--link'>Home</a></li>
                <li><NavLink to="/picrenamer/" className='header--link'>PicRenamer</NavLink></li>
                <li><NavLink to="/picrenamer/info/" className='header--link'>Info</NavLink></li>

            </ul>
        </div>
    )
}