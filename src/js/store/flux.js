const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			favorites:[]
		},
		actions: {
			getCharacters: async () =>{
				try{
					const store = getStore()
					const resp = await fetch(getStore().url+'/people')
					const data = await resp.json()
					setStore({...store,people: data.results})
					console.log(data)
				} catch(error){
					console.log("error al obtener datos de personajes con el fetch")
				}
			},
			getPlanets: async () =>{
				try{
					const store = getStore()
					const resp = await fetch(getStore().url+'/planets')
					const data = await resp.json()
					setStore({...store,planets: data.results})
					console.log(data)
				} catch(error){
					console.log("error al obtener datos de planetas con el fetch")
				}
			},
			getVehicles: async () =>{
				try{
					const store = getStore()
					const resp = await fetch(getStore().url+'/vehicles')
					const data = await resp.json()
					setStore({...store,vehicles: data.results})
					console.log(data)
				} catch(error){
					console.log("error al obtener datos de vehículos con el fetch")
				}
			},
			getMoreInformation: async (type,uid) =>{
				try{
					const store = getStore()
					const resp = await fetch(`${getStore().url}/${type}/${uid}`)
					const data = await resp.json()
					setStore({...store,details: data.result})
					console.log(data)
				} catch(error){
					console.log("error al obtener datos detallados")
				}
			},
			putInFavorites: (name)=>{
				const store = getStore()
				setStore({...store,favorites:[...store.favorites,name]});
			},
			deleteFavorite(uid){
				const store = getStore()
				const updatedFavorites = store.favorites.filter((a,b)=> b !== uid)
				return setStore({favorites:(updatedFavorites)})
			}
		}
	};
};

export default getState;
