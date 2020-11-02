import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <div className="center">
                <Dropdown size="sm">
                    <Dropdown.Toggle variant>Explore</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/about">About</Dropdown.Item>                        
                    </Dropdown.Menu>
                </Dropdown>
            </div>            

            <NavLink className="navbar-brand nav-brand" exact to="/">HocchiCreav</NavLink>

            <div>
                <form>
                
                    <input className="search-bar" placeholder="Search.." type="text" />

                    <button className="search-icon">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>

                    <button className="user-icon" title="User Login">
                        <ion-icon name="person-outline"></ion-icon>
                    </button>
                </form>
            </div>
        </nav>
    )
}

// bootstrap centering
// https://www.codeply.com/go/kTGlK9Axdk
export default NavBar;