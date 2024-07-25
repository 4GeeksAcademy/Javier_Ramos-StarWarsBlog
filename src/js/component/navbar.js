import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand ms-5 fs-1"><span className="fa-brands fa-jedi-order me-1"/>Home</span>
			</Link>
			<h1>Star Wars Demo Databank</h1>
			<div className="dropdown">
				<a className="btn btn-secondary dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos
				</a>

				<ul className="dropdown-menu mr-5">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</nav>
	);
};
