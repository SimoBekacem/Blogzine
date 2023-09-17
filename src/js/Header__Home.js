import React from 'react';
const Header__Home = () => {
	return (
		<li className="Header__dropdowns__Home nav-item dropdown">
			<a
				className="nav-link dropdown-toggle"
				href="#"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Home
			</a>
			<ul className="dropdown-menu">
				<li>
					<a className="dropdown-item" href="#">
						Home Default
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Home Lazy Load
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Magazine Classic
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Magazine
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Home Cards
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Blog Classic
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Blog Personal
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Blog Vintage
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Blog tech
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Blog Fachion
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Blog Podcast
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Home Shop
					</a>
				</li>
			</ul>
		</li>
	);
};
export default Header__Home;
