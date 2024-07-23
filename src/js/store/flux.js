const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () =>{
				try{
					const resp = await fetch(getStore().url+'/people')
					const data = await resp.json()
					setStore({people: data.results})
					console.log(data)
				} catch(error){
					console.log("error")
				}
			},
			getPlanets: async () =>{
				try{
					const resp = await fetch(getStore().url+'/planets')
					const data = await resp.json()
					setStore({planets: data.results})
					console.log(data)
				} catch(error){
					console.log("error")
				}
			},
			getVehicles: async () =>{
				try{
					const resp = await fetch(getStore().url+'/vehicles')
					const data = await resp.json()
					setStore({vehicles: data.results})
					console.log(data)
				} catch(error){
					console.log("error")
				}
			},
		}
	};
};

export default getState;
