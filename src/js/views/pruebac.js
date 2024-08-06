import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Pruebac = () => {
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
            <h4><b>Height: </b>{store.details?.properties?.height}</h4>
            <h4><b>Mass: </b>{store.details?.properties?.mass}</h4>
            <h4><b>Hair Color: </b>{store.details?.properties?.hair_color}</h4>
            <h4><b>Skin Color: </b>{store.details?.properties?.skin_color}</h4>
            <h4><b>Eye Color: </b>{store.details?.properties?.eye_color}</h4>
            <h4><b>Gender: </b>{store.details?.properties?.gender}</h4>
            <h4><b>Birth year: </b>{store.details?.properties?.birth_year}</h4>
        </div>
    )
}