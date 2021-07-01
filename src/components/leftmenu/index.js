import React from 'react';
import { Link } from 'react-router-dom';

// images
import logo from '../../assets/images/logo.svg';
import dots from '../../assets/images/dots.svg';
import './style.scss';

const LeftSideMenu = () => {
	return (
		<div className="leftMenu">
			<Link className="logo" to="/">
				<img src={logo} alt="logo" />
			</Link>
			<span className="dots">
				<img src={dots} alt="dot" />
			</span>
			<h3 className="sidebarText">Clarity Cooperative</h3>
		</div>
	);
};
export default LeftSideMenu;
