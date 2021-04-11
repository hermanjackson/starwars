import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>people</h1>
			<div className="row cardRow">
				{store.people.map((item, index) => {
					return (
						<div className="col" key={index}>
							<div className="card" style={{ width: "18rem" }}>
								<img src="http://placehold.jp/100x100.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										<button type="button" className="btn btn-primary btn-sm">
											learn more
										</button>
										<i className="far fa-heart" />
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<h1>vehicles</h1>
			<div className="row cardRow">
				{store.vehicles.map((item, index) => {
					return (
						<div className="col" key={index}>
							<div className="card" style={{ width: "18rem" }}>
								<img src="http://placehold.jp/100x100.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										<button type="button" className="btn btn-primary btn-sm">
											learn more
										</button>
										<i className="far fa-heart" />
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<h1>Planets</h1>
			<div className="row cardRow">
				{store.planets.map((item, index) => {
					return (
						<div className="col" key={index}>
							<div className="card" style={{ width: "18rem" }}>
								<img src="http://placehold.jp/100x100.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										<button type="button" className="btn btn-primary btn-sm">
											learn more
										</button>
										<i className="far fa-heart" />
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
