import React from "react";
import { useParams } from "react-router";
import { Card } from "../component/card.jsx";

export const Prueba = () => {
    const params = useParams()
    console.log(params)
    return (
       <div>
            <h1>Texto desde view Prueba</h1>
            <Card />
        </div>
    )
}