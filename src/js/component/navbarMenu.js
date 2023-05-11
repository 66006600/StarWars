import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from "Dropdown.js";


export const NavbarMenu = () => {
	return (
		<Navbar>
			<Navbar.Brand>
				<image src="https://www.shutterstock.com/image-photo/kiev-ukraine-september-11-2018-260nw-1293816985.jpg">

				</image>
			</Navbar.Brand>

			<Nav className="mr-auto">				
				<Link className="nav-link" to="/Characters">Personajes</Link>
				<Link className="nav-link" to="/planets">Planets</Link>
			</Nav>
			<Dropdown />

		</Navbar>
	);
};

export default NavbarMenu;
