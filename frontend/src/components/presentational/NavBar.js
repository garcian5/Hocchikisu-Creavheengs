import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="center">
                <ion-icon name="menu-outline"></ion-icon>
            </div>

            <NavLink className="navbar-brand" exact to="/">HocchiCreav</NavLink>

            <div className="center">
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </nav>
    )
}

// bootstrap centering
// https://www.codeply.com/go/kTGlK9Axdk
export default NavBar;