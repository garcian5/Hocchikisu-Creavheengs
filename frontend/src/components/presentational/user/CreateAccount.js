import React from "react";

function CreateAccount() {
	return (
		<div className="login-create">
			<div className="container logcrea-box">
				<h1 className="center logcrea-greeting">Welcome to HocchiCreav!</h1>
				<div className="center">
					<button className="logcrea-btn light-blue">Let's Get You Started!</button>
					<p className="or">--OR--</p>
					<button className="logcrea-btn light-grey">Log In</button>
				</div>
			</div>
		</div>
	)
}

export default CreateAccount;