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

            <form>
                <NavLink className="navbar-brand nav-name" exact to="/">HocchiCreav</NavLink>
                <input type="text" />

                <button className="search-icon">
                    <ion-icon name="search-outline"></ion-icon>
                </button>

                <button className="user-icon">
                    <ion-icon name="person-outline"></ion-icon>
                </button>
            </form>
        </nav>
    )
}

// bootstrap centering
// https://www.codeply.com/go/kTGlK9Axdk
export default NavBar;