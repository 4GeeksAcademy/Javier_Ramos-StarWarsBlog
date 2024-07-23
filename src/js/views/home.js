import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

export const Home = () => {
	const {store,actions} = useContext(Context)
	return (
		<div className="text-center mt-5">
			<h1>May the force be with you!</h1>
			<div className="container">
				{store.people?.map(el=> <Card key={el.uid} name={el.name} uid={el.uid}/>)}
			</div>
			<div className="container">
				{store.planets?.map(el=> <Card key={el.uid} name={el.name} uid={el.uid}/>)}
			</div>
			<div className="container">
				{store.vehicles?.map(el=> <Card key={el.uid} name={el.name} uid={el.uid}/>)}
			</div>
		</div>
	)
};