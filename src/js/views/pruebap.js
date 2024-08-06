import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Pruebap = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()
    console.log(params)
    const { uid, type } = useParams()

    useEffect(() =>  {
        actions.getMoreInformation(type, uid)
    }, [])

    return (
        <div className="container">
            <h1><b>{store.details?.properties?.name}</b></h1>
            <img src="https://picsum.photos/800/600"/>
            <h4><b>Diameter: </b>{store.details?.properties?.diameter}</h4>
            <h4><b>Rotation Period: </b>{store.details?.properties?.rotation_period}</h4>
            <h4><b>Orbital Period: </b>{store.details?.properties?.orbital_period}</h4>
            <h4><b>Gravity: </b>{store.details?.properties?.gravity}</h4>
            <h4><b>Population: </b>{store.details?.properties?.population}</h4>
            <h4><b>Climate: </b>{store.details?.properties?.climate}</h4>
            <h4><b>Terrain: </b>{store.details?.properties?.terrain}</h4>
            <h4><b>Surface Water: </b>{store.details?.properties?.surface_water}</h4>
        </div>
    )
}