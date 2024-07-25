const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			favorites:null
		},
		actions: {
			getCharacters: async () =>{
				try{
					const resp = await fetch(getStore().url+'/people')
					const data = await resp.json()
					setStore({people: data.results})
					console.log(data)
				} catch(error){
					console.log("error al obtener datos de personajes con el fetch")
				}
			},
			getPlanets: async () =>{
				try{
					const resp = await fetch(getStore().url+'/planets')
					const data = await resp.json()
					setStore({planets: data.results})
					console.log(data)
				} catch(error){
					console.log("error al obtener datos de planetas con el fetch")
				}
			},
			getVehicles: async () =>{
				try{
					const resp = await fetch(getStore().url+'/vehicles')
					const data = await resp.json()
					setStore({vehicles: data.results})
					console.log(data)
				} catch(error){
					console.log("error al obtener datos de vehículos con el fetch")
				}
			},
			getMoreInformation: async (type,uid) =>{
				try{
					const resp = await fetch(`${getStore().url}/${type}/${uid}`)
					const data = await resp.json()
					setStore({details: data.result})
					console.log(data)
				} catch(error){
					console.log("error al obtener datos detallados")
				}
			},
		}
	};
};

export default getState;
