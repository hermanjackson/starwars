import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const VehicleStats = props => {
	const [person, setPerson] = useState(null);
	useEffect(() => {
		fetch(props.url)
			.then(res => res.json())
			.then(data => setPerson(data.result.properties));
	}, []);
	// "properties": {
	//   "model": "CR90 corvette",
	//   "starship_class": "corvette",
	//   "manufacturer": "Corellian Engineering Corporation",
	//   "cost_in_credits": "3500000",
	//   "length": "150",
	//   "crew": "30-165",
	//   "passengers": "600",
	//   "max_atmosphering_speed": "950",
	//   "hyperdrive_rating": "2.0",
	//   "MGLT": "60",
	//   "cargo_capacity": "3000000",
	//   "consumables": "1 year",
	//   "pilots": [],
	//   "created": "2020-09-17T17:55:06.604Z",
	//   "edited": "2020-09-17T17:55:06.604Z",
	//   "name": "CR90 corvette",
	//   "url": "https://www.swapi.tech/api/starships/2"
	// },
	return (
		<div className="row">
			{person !== null && (
				<>
					<div className="col-12 col-md-2">
						<h3>Height</h3>
						<p>{person.height}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>Mass</h3>
						<p>{person.mass}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>Hair Color</h3>
						<p>{person.hair_color}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>Eye Color</h3>
						<p>{person.eye_color}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>Birth Year</h3>
						<p>{person.birth_year}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>Gender</h3>
						<p>{person.gender}</p>
					</div>
				</>
			)}
		</div>
	);
};

VehicleStats.propTypes = {
	url: PropTypes.string.isRequired
};
