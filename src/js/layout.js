import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Container, Row, Col } from "react-bootstrap";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import  NavbarMenu  from "./component/navbarMenu";
import { Footer } from "./component/footer";
import Planets from "./views/planets";
import Characters from "./views/character";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>

					<Row>
						<col>
							<Navbar />
						</col>
					</Row>

					<Row>
						<col>
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route exact path="/planets" component={Planets}/>
								<Route exact path="/characters" component={Characters}/>
									<Home />
								<Route/>

								<Route> <h1>Not found!</h1>
								</Route>
							</Switch>
						</col>
					</Row>


					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
