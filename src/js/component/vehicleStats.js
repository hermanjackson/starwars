import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const VehicleStats = props => {
	const [vehicle, setVehicle] = useState(null);
	useEffect(() => {
		fetch(props.url)
			.then(res => res.json())
			.then(data => setVehicle(data.result.properties));
	}, []);
	//"properties": {
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
			{vehicle !== null && (
				<>
					<div className="col-12 col-md-2">
						<h3>cost in credits</h3>
						<p>{vehicle.cost_in_credits}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>Mass</h3>
						<p>{vehicle.model}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>Hair Color</h3>
						<p>{vehicle.length}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>vehicle name</h3>
						<p>{vehicle.name}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>vehicle passenger</h3>
						<p>{vehicle.passengers}</p>
					</div>
					<div className="col-12 col-md-2">
						<h3>vehicle capacity</h3>
						<p>{vehicle.cargo_capacity}</p>
					</div>
				</>
			)}
		</div>
	);
};

VehicleStats.propTypes = {
	url: PropTypes.string.isRequired
};
