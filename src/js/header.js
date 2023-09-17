import React from 'react';
import logo from '../images/logo.png';
import Header__Home from './Header__Home';
import Header__Pages from './Header__Pages';
import Header__Post from './Header__Post';
import Header__Lifestyle from './Header__Lifestyle';
import Header__sidebar from './Header__sidebar';
const Header = () => {
	return (
		<nav className="Header navbar navbar-expand-md">
			<div className="container-fluid">
				<a className="navbar-brand Header__logo" href="#">
					<img src={logo} width="50px" />
					<h1>ZINE</h1>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="Header__dropdowns navbar-nav me-auto mb-2 mb-lg-0">
						<Header__Home />
						<Header__Pages />
						<Header__Post />
						<Header__Lifestyle />
						<li className="nav-item">
							<a className="nav-link disabled">Disabled</a>
						</li>
					</ul>
					<button className="Header__subscribe">Subscribe</button>
					<form className="d-flex Header__searchbar" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success"
							type="submit"
						>
							Search
						</button>
					</form>
					<Header__sidebar />
				</div>
			</div>
		</nav>
	);
};
export default Header;
