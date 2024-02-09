const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		 people: [],
		 detailedPeople: [],
		 planets: [],
		 detailedPlanets: [],
		 vehicles: [],
		 detailedVehicles: [],
		 favorito: [],
		 
		},
		actions: {
			// Use getActions to call a function within a fuction
			obtainPeopleData: async () => {
				try {
					const openConection = await fetch("https://www.swapi.tech/api/people/")
					const dataJson = await openConection.json()
					setStore({people: dataJson.results})
					
					const store = getStore()
					
					const getPeople = store.people
					
					const detailedPeoplePromises = getPeople.map((people) =>
					fetch(people.url).then((res) => res.json())
					);
		
					const detailedPeople = await Promise.all(detailedPeoplePromises);
					
					detailedPeople.map((people, index) => people.img = 'https://starwars-visualguide.com/assets/img/' + 'characters/' + (index + 1) + '.jpg')

					setStore({ detailedPeople: detailedPeople });

					

				} catch (error) {
					console.log(error)
				}
			},
			obtainPlanetsData: async () => {
				try {
					const openConection = await fetch("https://www.swapi.tech/api/planets/")
					const dataJson = await openConection.json()
					setStore({planets: dataJson.results})
					
					const store = getStore()
					
					const getPlanets = store.planets
					
					const detailedPlanetsPromises = getPlanets.map((planets) =>
					fetch(planets.url).then((res) => res.json())
					);
		
					const detailedPlanets = await Promise.all(detailedPlanetsPromises);
					
					detailedPlanets.map((planet, index) => planet.img = 'https://starwars-visualguide.com/assets/img/' + 'planets/' + (index + 1) + '.jpg')

					setStore({ detailedPlanets: detailedPlanets });

					

				} catch (error) {
					console.log(error)
				}
			},
			obtainVehiclesData: async () => {
				try {
					const openConection = await fetch("https://www.swapi.tech/api/vehicles/")
					const dataJson = await openConection.json()
					setStore({vehicles: dataJson.results})
					
					const store = getStore()
					
					const getVehicles = store.vehicles
					
					const detailedVehiclesPromises = getVehicles.map((vehicles) =>
					fetch(vehicles.url).then((res) => res.json())
					);
		
					const detailedVehicles = await Promise.all(detailedVehiclesPromises);
					
					detailedVehicles.map((vehicle, index) => vehicle.img = 'https://starwars-visualguide.com/assets/img/' + 'vehicles/' + (index + 1) + '.jpg')

					setStore({ detailedVehicles: detailedVehicles });

					

				} catch (error) {
					console.log(error)
				}
			},
			guardarFavorito : (id, type) => {
				console.log(id,type)
				const store = getStore()
				const correctStore = type === 'people' ? store.detailedPeople : type === 'planet'? store.detailedPlanets : store.detailedVehicles
				const intId =  parseInt(id)
				const rightInfo = correctStore[intId]
				const favName = rightInfo.result.properties.name
				store.favorito.push(favName)
				setStore({favorito: store.favorito})
				

			},
			borrarFavorito: (index) =>{
			const store = getStore()
			const favs = store.favorito
			const removedFav = favs.splice(index, 1)
			setStore({favorito: favs})
			console.log(favs)


			}	
		}
	};
};

export default getState;
