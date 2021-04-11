import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const PersonStats = props => {
	const [person, setPerson] = useState(null);
	useEffect(() => {
		fetch(props.url)
			.then(res => res.json())
			.then(data => setPerson(data.result.properties));
	}, []);
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

PersonStats.propTypes = {
	url: PropTypes.string.isRequired
};
