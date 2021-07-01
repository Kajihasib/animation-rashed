import React from 'react';
import './style.scss';

// images
import arrow from '../../assets/images/arrow.svg';
import joinArrow from '../../assets/images/arrow-right.svg';
import joinNow from '../../assets/images/join-now.svg';

import footerBg from '../../assets/images/bg/footer.svg';
import footerImg from '../../assets/images/footer.jpg';
import email from '../../assets/images/icons/email.svg';
import password from '../../assets/images/icons/password.svg';
import rePassword from '../../assets/images/icons/re-password.svg';
const Footer = () => {
	return (
		<footer className="footerArea">
			<div className="scrollBtn footerJoinNow">
				<img className="scrolText" src={joinNow} alt="text" />
				<img className="angleText" src={joinArrow} alt="angle" />
			</div>
			<div className="footerBg">
				<img src={footerBg} alt="Footer" />
			</div>
			<div className="footerImg">
				<img src={footerImg} alt="bg images" />
			</div>
			<h2 className="footerTitle">Join The Community</h2>
			<p className="footerText">The work you do changes lives. We want to change yours.</p>
			<form className="footerForm">
				<p className="footerInput">
					<input type="text" placeholder="E-mail*" />
					<img src={email} alt="email" />
				</p>
				<p className="footerInput">
					<input type="text" placeholder="Password*" />
					<img src={password} alt="Password" />
				</p>
				<p className="footerInput">
					<input type="text" placeholder="Re-enter Password*" />
					<img src={rePassword} alt="Re-enter Password*" />
				</p>
			</form>
			<button className="joinBtn">
				Join The Cooperative <img src={arrow} alt="arrow" />
			</button>
		</footer>
	);
};
export default Footer;
