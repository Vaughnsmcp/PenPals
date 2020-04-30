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
                    Welcome to Penpals! Where poets and writers unite!
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/login"
                className={
                    window.location.pathname === `/login` ? `nav-link active` : `nav-link`
                }
                >
                    Create an account with us!
                </Link>
            </li>
        </ul>
    );
}

export default NavBar;