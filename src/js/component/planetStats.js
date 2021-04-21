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
						<h3>Height</h3>
						<p>{planet.height}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>Mass</h3>
						<p>{planet.mass}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>Hair Color</h3>
						<p>{planet.hair_color}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>Eye Color</h3>
						<p>{planet.eye_color}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>Birth Year</h3>
						<p>{planet.birth_year}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>Gender</h3>
						<p>{planet.gender}</p>
					</div>
				</>
			)}
		</div>
	);
};

PlanetStats.propTypes = {
	url: PropTypes.string.isRequired
};
