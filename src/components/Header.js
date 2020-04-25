import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Header(props) {
    const [showMenu, setShowMenu] = useState(false);
    const [menu, setMenu] = useState({close: "", show: ""});
    const [currentPage, setCurrentPage] = useState("/");

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
                    <li className={`nav-item ${menu.show} ${currentPage === "/" ? "current" : ""}`}>
                        <Link
                            to="/"
                            className="nav-link"
                            onClick={() => {
                                setCurrentPage("/");
                                toggleMenu();
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={`nav-item ${menu.show} ${currentPage === "/about" ? "current" : ""}`}>
                        <Link
                            to="/about"
                            className="nav-link"
                            onClick={() => {

                                setCurrentPage("/about");
                                toggleMenu();
                            }}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className={`nav-item ${menu.show} ${currentPage === "/work" ? "current" : ""}`}>
                        <Link
                            to="/work"
                            className="nav-link"
                            onClick={() => {
                                setCurrentPage("/work");
                                toggleMenu();
                            }}
                        >
                            My Work
                        </Link>
                    </li>
                    <li className={`nav-item ${menu.show} ${currentPage === "/contact" ? "current" : ""}`}>
                        <Link
                            to="/contact"
                            className="nav-link"
                            onClick={() => {
                                setCurrentPage("/contact");
                                toggleMenu();
                            }}
                        >
                            How To Reach Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}