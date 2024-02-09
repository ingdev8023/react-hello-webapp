import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";

export const Home = () => {
	const { actions, store } = useContext(Context);
	return (
	<>
	<Navbar/>
	<div className="d-flex flex-column align-items-center">
		<h2>Characters</h2>
		<div className="row justify-content-center bg-dark">
		{store.detailedPeople.map((people, index) => {
								return (
									<Card
										name={people.result.properties.name}
										gender = {people.result.properties.gender}
										hairColor = {people.result.properties['hair_color']}
										height = {people.result.properties.height}
										img = {people.img}
										key={index}
										id = {index}
										onSaveFav = {(id, type) => actions.guardarFavorito(id, type)}
										type = 'people'
										
									/>
								);
							})}
		</div>
	</div>
	<div className="d-flex flex-column align-items-center my-3">
		<h2>Planets</h2>
		<div className="row justify-content-center bg-dark">
		
		{store.detailedPlanets.map((planets, index) => {
								return (
									<Card
										planetName={planets.result.properties.name}
										climate = {planets.result.properties.climate}
										population = {planets.result.properties.population}
										terrain = {planets.result.properties.terrain}
										img = {planets.img}
										key={index}
										id = {index}
										onSaveFav = {(id, type) => actions.guardarFavorito(id, type)}
										type = 'planet'
									/>
								);
							})}
		</div>
	</div>

	<div className="d-flex flex-column align-items-center">		
			<h2>Vehicles</h2>
			<div className="row justify-content-center bg-dark">
							
			{store.detailedVehicles.map((vehicles, index) => {
									return (
										<Card
											vehicleName={vehicles.result.properties.name}
											model = {vehicles.result.properties.model}
											capacity = {vehicles.result.properties.cargo_capacity}
											cost = {vehicles.result.properties.cost_in_credits}
											img = {vehicles.img}
											key={index}
											id = {index}
											onSaveFav = {(id, type) => actions.guardarFavorito(id, type)}
											type = 'vehicle'
										/>
									);
								})}
			</div>
	</div>
	</>
	)
}
