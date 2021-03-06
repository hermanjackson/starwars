import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { MyNavbar } from "./component/Mynavbar";
import { Footer } from "./component/footer";
import { PersonStats } from "./component/personStats";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<MyNavbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/planets/:planetid">
							<Single />
						</Route>

						<Route exact path="/people/:peopleid">
							<Single />
						</Route>
						<Route exact path="/vehicles/:vehicleid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
