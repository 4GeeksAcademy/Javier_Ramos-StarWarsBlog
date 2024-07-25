import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

export const Home = () => {
	const {store,actions} = useContext(Context)
	return (
		<div>
			<div className="row">
				<h1>CHARACTERS</h1>
				{store.people?.map(el=> <Card key={el.uid} name={el.name} type={"people"} uid={el.uid}/>)}
			</div>
			<div className="row">
				<h1>PLANETS</h1>
				{store.planets?.map(el=> <Card key={el.uid} name={el.name} type={"planets"} uid={el.uid}/>)}
			</div>
			<div className="row">
				<h1>VEHICLES</h1>
				{store.vehicles?.map(el=> <Card key={el.uid} name={el.name} type={"vehicles"} uid={el.uid}/>)}
			</div>
		</div>
	)
};