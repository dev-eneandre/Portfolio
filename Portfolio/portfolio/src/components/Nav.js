import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "../styles/Nav.css";

function Nav() {
    
    const [isActive, setActive] = useState(false);

    const toggler = () => {
        setActive(!isActive);
    }

  return (
        <nav>
            <div className="logo"> 
                <Link to="/">Andre</Link>
            </div>
            <div className={isActive ? "nav-active pages" : "pages"}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="burger" onClick={toggler}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
  )
}

export default Nav