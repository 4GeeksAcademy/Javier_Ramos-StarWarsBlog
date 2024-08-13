import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand ms-5 fs-1"><span className="fa-brands fa-jedi-order me-1"/>Home</span>
			</Link>
			<h1>Star Wars Demo Databank</h1>
			<div className="dropdown">
				<a className="btn btn-secondary dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos {store.favorites.length}
				</a>
				<ul className="dropdown-menu mr-5">
					{store.favorites?.map((name,index) => (
						<li key={index}>{name} <span className="fas fa-trash-alt" onClick={()=>actions.deleteFavorite(index)}></span></li>
					))}
				</ul>
			</div>
		</nav>
	);
};
 