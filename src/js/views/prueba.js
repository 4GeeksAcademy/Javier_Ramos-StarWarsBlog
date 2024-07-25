import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext.js";

export const Prueba = () => {
    const {store,actions} = useContext(Context)
    const params = useParams()
    console.log(params)
    const {uid,type}=useParams()

    useEffect(()=>{
        actions.getMoreInformation(type,uid)
    },[])

    return (
       <div>
            <h1>vista detallada de {store.details?.properties?.name}</h1>
            <span className="fa-brands fa-galactic-republic fa-icons"/>
            <span className="fa-brands fa-old-republic fa-icons"/>
            <span className="fa-brands fa-jedi-order fa-icons"/>
            <span className="fa-solid fa-jedi fa-icons"/>
            <span className="fa-brands fa-jedi-order fa-icons"/>
            <span className="fa-brands fa-old-republic fa-icons"/>
            <span className="fa-brands fa-galactic-republic fa-icons"/>
        </div>
    )
}