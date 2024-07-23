import React from "react";
import { Link } from "react-router-dom";

export const Card = ({name,uid}) =>{
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="" alt={name}/>
            <h4>{name}</h4>
            <div>
                <Link className="btn btn-primary" to={'/prueba/character/'+uid}>
				    More information
		        </Link>
                <button className="btn btn-success">
                    Fav
                </button>
            </div>
        </div>
    )
}