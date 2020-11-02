import React from "react";
import { Link } from "react-router-dom";

function Dashboard(props) {
	return (		
		<div className="container">
			<Link className="link" to={props.path}>
				<div className="category-box">
					<p>{ props.category }</p>
				</div>
			</Link>
		</div>
	)
}

export default Dashboard;