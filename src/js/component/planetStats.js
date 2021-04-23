import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const PlanetStats = props => {
	const [planet, setPlanet] = useState(null);
	useEffect(() => {
		fetch(props.url)
			.then(res => res.json())
			.then(data => setPlanet(data.result.properties));
	}, []);
	// "properties": {
	//   "diameter": "10465",
	//   "rotation_period": "23",
	//   "orbital_period": "304",
	//   "gravity": "1 standard",
	//   "population": "200000",
	//   "climate": "arid",
	//   "terrain": "desert",
	//   "surface_water": "1",
	//   "created": "2021-04-09T18:32:18.209Z",
	//   "edited": "2021-04-09T18:32:18.209Z",
	//   "name": "Tatooine",
	//   "url": "https://www.swapi.tech/api/planets/1"
	// },
	return (
		<div className="row">
			{planet !== null && (
				<>
					<div className="col-12 col-md-2">
						<h3>Planet Name</h3>
						<p>{planet.name}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>edited</h3>
						<p>{planet.edited}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>planet climate</h3>
						<p>{planet.climate}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>planet population</h3>
						<p>{planet.population}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>planet diameter</h3>
						<p>{planet.diameter}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>planet terrain</h3>
						<p>{planet.terrain}</p>
					</div>
				</>
			)}
		</div>
	);
};

PlanetStats.propTypes = {
	url: PropTypes.string.isRequired
};
