import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

// images
import logo from '../../../assets/images/big-logo.svg';
import arrow from '../../../assets/images/arrow.svg';
import scrollText from '../../../assets/images/scroll.svg';
import angleDown from '../../../assets/images/angle-down.svg';
// videos
import video1 from '../../../assets/videos/hero-video1.mp4';
import video2 from '../../../assets/videos/hero-video2.mp4';
import video3 from '../../../assets/videos/hero-video3.mp4';

const videos = [
	{
		id: 1,
		video: video1,
		bg: 'linear-gradient(180deg, rgba(238, 186, 84, 0) 0%, #EEBA54 100%)',
		barBg: 'linear-gradient(180deg, #FF731B 0%, rgba(255, 115, 27, 0) 100%), #EEBA54',
	},
	{
		id: 2,
		video: video2,
		bg: 'linear-gradient(180deg, rgba(246, 114, 194, 0) 0%, #F672C2 100%)',
		barBg: 'linear-gradient(180deg, #F672C2 0%, #F672C2 0%, #FFD9EB 100%), #FFD9EB',
	},
	{
		id: 3,
		video: video3,
		bg: 'linear-gradient(180deg, rgba(132, 218, 218, 0) 0%, #84DADA 100%)',
		barBg: 'linear-gradient(180deg, #98F8ED 0%, #6ED5CA 100%), #6DCBE8',
	},
];

const Hero = () => {
	return (
		<section className="heroArea">
			{/* <div className="heroBg"></div> */}
			<div className="heroContent">
				<Link className="heroLogo" to="/">
					<img src={logo} alt="logo" />
				</Link>
				<h1>We Help Therapists Create a Thriving Private Practice</h1>
				<p>We take care of your needs so that you can do what you do best. Helping people.</p>
				<Link className="joinBtn" to="/">
					Join The Cooperative <img src={arrow} alt="arrow" />
				</Link>
			</div>
			<ul className="heroVideos">
				{videos.slice(0, 1).map((item) => (
					<li key={item.id}>
						<div className="herovideo">
							<video autoPlay loop>
								<source src={item.video} type="video/mp4" />
							</video>
							<span className="videoBg" style={{ background: item.bg }}></span>
							<span className="videobarBg" style={{ background: item.barBg }}></span>
						</div>
					</li>
				))}
				<li>
					{videos.slice(1, 3).map((item) => (
						<div key={item.id} className="herovideo">
							<video autoPlay loop>
								<source src={item.video} type="video/mp4" />
							</video>
							<span className="videoBg" style={{ background: item.bg }}></span>
							<span className="videobarBg" style={{ background: item.barBg }}></span>
						</div>
					))}
				</li>
			</ul>
			<div className="scrollBtn">
				<img className="scrolText" src={scrollText} alt="text" />
				<img className="angleText" src={angleDown} alt="angle" />
			</div>
		</section>
	);
};
export default Hero;
