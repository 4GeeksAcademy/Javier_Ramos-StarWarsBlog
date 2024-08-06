import React from "react";
import { Link } from "react-router-dom";

export const Cardv   = ({name,uid,type}) =>{
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="https://picsum.photos/200/100?random=3"/>
            <h3>{name}</h3>
            <div>
                <Link className="btn btn-primary" to={`/pruebav/${type}/${uid}`}>
				    More information
		        </Link>
                <button className="btn btn-success">
                    <span className="fa-solid fa-heart"/>
                </button>
            </div>
        </div>
    )
}