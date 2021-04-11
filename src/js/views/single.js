import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PersonStats } from "../component/personStats";
import { VehicleStats } from "../component/vehicleStats";
import { PlanetStats } from "../component/planetStats";

export const Single = props => {
	const { store, actions } = useContext(Context);

	const params = useParams();
	const planetsID = params.planetid;
	const peopleID = params.peopleid;
	const vehiclesID = params.vehicleid;
	const [mytype, setMytype] = useState(undefined);
	const [currentID, setCurrentId] = useState(undefined);

	useEffect(
		() => {
			if (typeof planetsID !== "undefined") {
				setMytype("planets");
				setCurrentId(planetsID);
			} else if (typeof peopleID !== "undefined") {
				setMytype("people");
				setCurrentId(peopleID);
			} else {
				setMytype("vehicles");
				setCurrentId(vehiclesID);
			}
		},
		[planetsID, peopleID, vehiclesID]
	);

	console.log(mytype, currentID);

	return (
		<div>
			<div className="container">
				{typeof mytype !== "undefined" &&
					typeof currentID !== "undefined" &&
					store[mytype].length > 0 && (
						<>
							<div className="row">
								<div className="col-12 col-md-6">
									<img src="http://placehold.jp/400x400.png" />
								</div>
								<div className="col-12 col-md-6">
									<h1 className="display-4">{store[mytype][currentID].name}</h1>
									<p>i never seen start wars</p>
								</div>
							</div>
							{mytype === "people" && <PersonStats url={store[mytype][currentID].url} />}
							{mytype === "vehicles" && <VehicleStats url={store[mytype][currentID].url} />}
							{mytype === "planets" && <PlanetStats url={store[mytype][currentID].url} />}
						</>
					)}
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
