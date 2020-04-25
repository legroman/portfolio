import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [menu, setMenu] = useState({close: "", show: ""});

    const toggleMenu = event => {
        if (!showMenu) {
            setMenu({close: "close", show: "show"});
            setShowMenu(true);
        } else {
            setMenu({close: "", show: ""});
            setShowMenu(false);
        }
    };
    return (
        <header>
            <div className={`menu-btn ${menu.close}`} onClick={toggleMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            <nav className={`menu ${menu.show}`}>
                <div className={`menu-branding ${menu.show}`}>
                    <div className="portrait"></div>
                </div>
                <ul className={`menu-nav ${menu.show}`}>
                    <li className={`nav-item ${menu.show} current`}>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className={`nav-item ${menu.show}`}>
                        <Link to="/about" className="nav-link">About Me</Link>
                    </li>
                    <li className={`nav-item ${menu.show}`}>
                        <a href="#" className="nav-link">My Work</a>
                    </li>
                    <li className={`nav-item ${menu.show}`}>
                        <a href="#" className="nav-link">How To Reach Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}