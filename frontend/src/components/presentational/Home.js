import React from "react";
import Dashboard from "./artcategory/Dashboard";

function Home() {
	return (
		<main>
			<div className="container dashboard">
				<h1>Welcome!</h1>
				<Dashboard
					category="Literary Arts"
					path="/literary-art"
				/>
				<Dashboard
					category="Visual/Illustration Arts"
					path="/visual-art"
				/>
				<Dashboard
					category="Plastic Arts"
					path="/plastic-art"
				/>
				<Dashboard
					category="Other Arts"
					path="/other-art"
				/>
			</div>
		</main>
	)
}

export default Home;

// https://www.britannica.com/topic/the-arts