import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Dropdown, Container } from "react-bootstrap/";
import { Context } from "../store/appContext";

export const MyNavbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar bg="light">
			<Container fluid>
				<Link to={"/single"}>
					<Navbar.Brand href="/" as={Link}>
						<img
							alt=""
							src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG3.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
							role="button"
						/>
					</Navbar.Brand>
				</Link>
				<Dropdown className=" floatend" alignRight>
					<Dropdown.Toggle variant="primary" id="dropdown-basic">
						Favorites
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{store.favorites.length > 0 ? (
							store.favorites.map((item, index) => {
								return (
									<Dropdown.Item href="#/action-1" key={index}>
										{item.name}
										<span className="float-right" onClick={() => actions.removeFavorites(index)}>
											x
										</span>
									</Dropdown.Item>
								);
							})
						) : (
							<li>No favorites</li>
						)}
					</Dropdown.Menu>
				</Dropdown>
			</Container>
		</Navbar>
	);
};
