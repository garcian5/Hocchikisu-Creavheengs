import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import Login from "./user/Login";

function NavBar() {
    // for login modal view
    const [modalShow, setModalShow] = useState(false);

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
                <form className="side-by-side">
                    <input className="search-bar" placeholder="Search.." type="text" />

                    <button className="search-icon">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </form>

                <div className="side-by-side">
                    <button
                        className="user-icon"
                        title="User Login"
                        onClick={() => setModalShow(true)}
                    >
                        <ion-icon name="person-outline"></ion-icon>
                    </button>

                    <Login
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </nav>
    )
}

// bootstrap centering
// https://www.codeply.com/go/kTGlK9Axdk
export default NavBar;