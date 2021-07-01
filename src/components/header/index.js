import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';

import menuBar from '../../assets/images/menu.svg';

const Header = (props) => {
	const [responsive, setResponisve] = useState(false);
	const handleResponsive = () => {
		setResponisve(!responsive);
	};
	return (
		<header className={`${props.className} header-area`}>
			<div onClick={handleResponsive} className="responsive-trigger">
				<img src={menuBar} alt="menu" />
			</div>
			<ul className={`mainmenu d-flex flex-wrap align-items-center ${responsive ? 'active' : ''}`}>
				<li>
					<NavLink activeClassName="active" to="/resources">
						Resources
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/community">
						Community
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/upcoming-features">
						Upcoming Features
					</NavLink>
				</li>
			</ul>
			<ul className="loginSignupMenu">
				<li>
					<Link className="loginBtn" to="/login">
						Login
					</Link>
				</li>
				<li>
					<Link className="signupBtn" to="/join-for-free">
						Join For Free
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
