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
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4>Welcome Back HocchiCreathive!</h4>

                <form>
                    <div>
                        <input type="text" />
                    </div>

                    <div>
                        <input type="password" />
                    </div>

                    <button>LOGIN</button>
                </form>

                <p>--OR--</p>

                <Link to="/create-account">
                    <button onClick={props.onHide}>BE A HOCCHICREATIVE!</button>
                </Link>

            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
	)
}

export default Login;
//https://react-bootstrap.github.io/components/modal/