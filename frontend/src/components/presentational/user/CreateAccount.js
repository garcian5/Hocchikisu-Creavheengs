import React from "react";

function CreateAccount() {
	return (
		<div className="create-acct">
			<div className="container create-acct-box">
				<h1 className="center create-acct-greeting">Welcome to HocchiCreav!</h1>
				<h6 className="center" style={{ marginBottom: 35 }}>Sign Up!</h6>

				<form className="center">
					<div className="signup-box">
						<input className="names" type="text" placeholder="First Name" />
						<input className="names" type="text" placeholder="Last Name" />
					</div>

					<div className="signup-box">
						<input type="email" placeholder="Email" />
					</div>

					<div className="signup-box">
						<input type="password" placeholder="Password" />
					</div>

					<div className="signup-box">
						<input type="date" placeholder="Birthday" />
					</div>

					<button className="create-acct-btn light-blue">Create Account</button>
				</form>
			</div>
		</div>
	)
}

export default CreateAccount;