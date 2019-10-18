import React, {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';

import Login from "../Login";
import SignUp from "../SignUp";

import './index.css';

const NavBar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const [cookies, setCookie] = useCookies(['isAuthorized']);
    const [isAuthorized, setIsAuthorized] = useState(false);

    const logIn = () => {
        setCookie('isAuthorized', true, {path: '/'});
        setIsAuthorized(true);
    };

    const logOut = () => {
        setCookie('isAuthorized', false, {path: '/'});
        setIsAuthorized(false);
    };

    useEffect(() => {
        cookies.isAuthorized === "true" && setIsAuthorized(true);
    });

    return <nav className="navbar">
        <ul className="menu">
            <li className="menu-item">About</li>
            <li className="menu-item">Promos</li>
        </ul>
        <h1 className="logo" >Shmoker Travel</h1>
        <ul className="menu">
            {isAuthorized ? <><li className="menu-item" >Profile</li>
                    <li className="menu-item" onClick={logOut}>Log Out</li></> :
                <><li className="menu-item" onClick={() => setShowSignUp(true)}>Sign Up</li>
                <li className="menu-item" onClick={() => setShowLogin(true)}>Log In</li></>
            }
        </ul>

        <Login handleClose={() => setShowLogin(false)} show={showLogin} logIn={logIn}/>
        <SignUp handleClose={() => setShowSignUp(false)} show={showSignUp} logIn={logIn}/>
    </nav>
};

export default NavBar;