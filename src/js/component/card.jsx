import React from "react";
import { Link } from "react-router-dom";

export const Card = ({name,uid,type}) =>{
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="" alt={name}/>
            <h3>{name}</h3>
            <div>
                <Link className="btn btn-primary" to={`/prueba/${type}/${uid}`}>
				    More information
		        </Link>
                <button className="btn btn-success">
                    Fav
                </button>
            </div>
        </div>
    )
}