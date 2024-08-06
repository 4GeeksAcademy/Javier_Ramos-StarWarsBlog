import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Pruebav = () => {
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
            <h4><b>Model: </b>{store.details?.properties?.model}</h4>
            <h4><b>Vehicle Class: </b>{store.details?.properties?.vehicle_class}</h4>
            <h4><b>Manufacturer: </b>{store.details?.properties?.manufacturer}</h4>
            <h4><b>Cost in credits: </b>{store.details?.properties?.cost_in_credits}</h4>
            <h4><b>Length: </b>{store.details?.properties?.length}</h4>
            <h4><b>Crew: </b>{store.details?.properties?.crew}</h4>
            <h4><b>Passengers: </b>{store.details?.properties?.passengers}</h4>
            <h4><b>Max atmosphering speed: </b>{store.details?.properties?.max_atmosphering_speed}</h4>
            <h4><b>Cargo capacity: </b>{store.details?.properties?.cargo_capacity}</h4>
            <h4><b>Consumables: </b>{store.details?.properties?.consumables}</h4>
        </div>
    )
}