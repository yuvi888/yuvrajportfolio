import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style.css';

function NavBar() {
    const location = useLocation(); 
    console.log("Current Path:", location.pathname);

    return (
        <div className="header-container">
            <div className="hcondiv1">
                <img width="25px" height="25px" src= {process.env.PUBLIC_URL + '/assets/letter-y.png'} alt="" />
                <span style={{ color: 'white' }}>&nbsp;&nbsp;Yuvii</span>
            </div>

            <div className="hcondiv2">
                <nav className="navbar navbar-expand-sm">
                    <button 
                        className="navbar-toggler custom-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars custom-icon"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="menu-bar navbar-nav">
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link menu-item ${location.pathname === '/' ? 'active' : ''}`} 
                                    to="/"
                                >
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link menu-item ${location.pathname === '/resume' ? 'active' : ''}`} 
                                    to="/resume"
                                >
                                    <i className="fas fa-address-card"></i> Resume
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link menu-item ${location.pathname === '/gallery' ? 'active' : ''}`} 
                                    to="/gallery"
                                >
                                    <i className="far fa-image"></i> Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link menu-item ${location.pathname === '/contact' ? 'active' : ''}`} 
                                    to="/contact"
                                >
                                    <i className="fas fa-phone"></i> Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
