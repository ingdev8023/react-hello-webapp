import React, { useState, useEffect,useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);



	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">				
				<div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorito.map((favorito) => {
							return (
								<li>{favorito}</li>
							);
						})}							
						</ul>
				</div>
				
			</div>
		</nav>
	);
};
