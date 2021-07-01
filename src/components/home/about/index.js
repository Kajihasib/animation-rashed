import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

// images
import about from '../../../assets/images/about.jpg';
import arrow from '../../../assets/images/arrow.svg';
// import aboutBg from '../../../assets/images/bg/about-bg.svg';

const About = forwardRef((props, ref) => {
	return (
		<section ref={ref} className="aboutArea">
			{/* <div className="aboutBg">
				<img src={aboutBg} alt="bg" />
			</div> */}
			<div className="aboutImg">
				<img className="normalImage" src={about} alt="about" />
				<img className="hoverImage" src={about} alt="about" />
			</div>
			<div className="aboutContent">
				<h2>What is the Clarity Cooperative?</h2>
				<p className="aboutSub">
					Clarity of thought, passion, and purpose is our ethos. Similar to the way we work therapeutically:
					the Cooperative is one part practical and one part aspirational.
				</p>
				<p className="text">
					The Cooperative is a nationwide digital platform and community for therapists and healers.
					Individuals who need support, community, and are looking to grow and develop their private practice
					or business. We’re a group of therapists who have experienced the same pain points as you. You don’t
					suffer from a lack of inspiration or ideas, but you’re short on time and maybe energy. We make the
					lives of other therapists and healers easier by cutting through the noise. We focus on the most
					important, high impact and essential information. What you get is the best of the best from
					resources, support professionals, and trusted experts.
				</p>
				<Link className="joinBtn" to="/">
					Join The Cooperative <img src={arrow} alt="arrow" />
				</Link>
			</div>
			<h2 className="aboutTitle">Your business is p{/* eople. Our Business is You. */}</h2>
		</section>
	);
});
export default About;
