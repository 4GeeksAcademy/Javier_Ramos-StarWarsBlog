import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Cardc } from "../component/cardc.jsx";
import { Cardp } from "../component/cardp.jsx";
import { Cardv } from "../component/cardv.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div>
			<div className="row">
				<h1>CHARACTERS</h1>
				{store.people?.map(el => <Cardc key={el.uid} name={el.name} type={"people"} uid={el.uid} />)}
			</div>
			<div className="row">
				<h1>PLANETS</h1>
				{store.planets?.map(el => <Cardp key={el.uid} name={el.name} type={"planets"} uid={el.uid} />)}
			</div>
			<div className="row">
				<h1>VEHICLES</h1>
				{store.vehicles?.map(el => <Cardv key={el.uid} name={el.name} type={"vehicles"} uid={el.uid} />)}
			</div>
		</div>
	)
};