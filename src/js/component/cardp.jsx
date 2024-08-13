import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Cardp = ({name,uid,type}) =>{
    const { store, actions } = useContext(Context)
    const [inFavorites,setInFavorites]=useState(false);
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="https://picsum.photos/200/100?random=2"/> 
            <h3>{name}</h3>
            <div>
                <Link className="btn btn-primary" to={`/pruebap/${type}/${uid}`}>
				    More information
		        </Link>
                <button className="btn btn-success">
                    <span className="fa-solid fa-heart" onClick={()=>actions.putInFavorites(name)}/>
                </button>
            </div>
        </div>
    )
}