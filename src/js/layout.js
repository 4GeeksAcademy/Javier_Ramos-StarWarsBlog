import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Pruebac } from "./views/pruebac";
import { Pruebap } from "./views/pruebap";
import { Pruebav } from "./views/pruebav";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/pruebac/:type/:uid" element={<Pruebac />} />
						<Route path="/pruebap/:type/:uid" element={<Pruebap />} />
						<Route path="/pruebav/:type/:uid" element={<Pruebav />} />
						<Route path="*" element={<h1 className="text-center">Page not found</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
