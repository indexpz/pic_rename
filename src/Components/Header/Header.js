import React from 'react'
import {Link} from "react-router-dom";
import './Header.css'
import logo from '../../Images/index_logo.svg'

export default function Header() {
    return (
        <div className="header--container">
            <a href="https://indexpz.pl" target="_blank" rel="noopener"><img src={logo} alt="logo"/></a>
            <ul>
                <li><Link to='/help' className='header--link' >Jak to działa</Link></li>
            </ul>
        </div>
    )
}