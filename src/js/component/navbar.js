import React, { useState, useEffect,useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1388px-Star_Wars_Logo.svg.png' className="img-fluid m-3" style={{width:'50px', height:'50px' }}/>
			</Link>
			<div className="ml-auto">				
				<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle m-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorito.map((favorito,index) => {
							return (
								<>
									<li key={index}>{favorito}<i className="fa-solid fa-trash ms-1" onClick={()=> actions.borrarFavorito(index)}></i></li>
								</>
							);
						})}							
						</ul>
				</div>
				
			</div>
		</nav>
	);
};
