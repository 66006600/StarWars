import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();


	}, [])


	return (
		<Jumbotron>
			<h1>Listado personajes</h1>
			<span>{JSON.stringify(store.peopleList)}  </span>
		</Jumbotron>

	)
}


