import React from "react";
import Dashboard from "./artcategory/Dashboard";

function Home() {
	return (
		<main>
			<div className="container dashboard">
				<h1>This is the Main Content.</h1>
				<Dashboard
					category="story"
					path="/story"
				/>
				<Dashboard
					category="comics"
					path="/comics"
				/>
				<Dashboard
					category="art"
					path="/art"
				/>
				<Dashboard
					category="poem"
					path="/poem"
				/>
			</div>
		</main>
	)
}

export default Home;