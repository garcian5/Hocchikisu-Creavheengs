import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

function Login(props) {
	return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="login-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4 className="bottom-space">Welcome Back HocchiCreathive!</h4>

                <form className="center">
                    <div className="bottom-space">
                        <input type="text" placeholder="Username" />
                    </div>

                    <div className="bottom-space">
                        <input type="password" placeholder="Password" />
                    </div>

                    <button className="login-space create-acct-btn light-grey">LOGIN</button>
                </form>

                <p className="or">--OR--</p>

                <div className="center">
                    <Link to="/create-account">
                        <button className="login-space create-acct-btn light-blue" onClick={props.onHide}>BE A HOCCHICREATHIVE!</button>
                    </Link>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
	)
}

export default Login;
//https://react-bootstrap.github.io/components/modal/