import React from 'react';
import logo from '../imgs/logo.png';
import '../styles/navbar.css';
function NavBar(){
    return(
        <div>
            <nav className="navbar">
                <img className='logo' src={logo} alt="logo"/>
            </nav>
        </div>
    );
}

export default NavBar;