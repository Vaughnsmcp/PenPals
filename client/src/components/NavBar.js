import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <Link
                to="/"
                className={
                    window.location.pathname === `/` ? `nav-link active` : `nav-link`
                }
                >
                    Home
                    {/* Welcome to Penpals! Where poets and writers unite! */}
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/signup"
                className={
                    window.location.pathname === `/signup` ? `nav-link active` : `nav-link`
                }
                >
                    Create An Account With Us!
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/login"
                className={
                    window.location.pathname === `/login` ? `nav-link active` : `nav-link`
                }
                >
                    Welcome Back! Login Here
                </Link>
            </li>
        </ul>
    );
}

export default NavBar;