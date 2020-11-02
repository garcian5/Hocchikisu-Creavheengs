import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="center">
                <Dropdown size="sm">
                    <Dropdown.Toggle variant>Explore</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/test">Test</Dropdown.Item>                        
                    </Dropdown.Menu>
                </Dropdown>
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