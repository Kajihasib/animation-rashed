import React from 'react';
import { Link } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import Typical from 'react-typical';

import './style.scss';

// images
import arrow from '../../../assets/images/arrow.svg';

// videos
import video1 from '../../../assets/videos/who-video1.mp4';
import video2 from '../../../assets/videos/who-video2.mp4';
import video3 from '../../../assets/videos/who-video3.mp4';

const videos = [
	{
		id: 1,
		video: video1,
		bg: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 14.19%, rgba(37, 72, 68, 0) 35.48%, #6ED5CA 100%)',
		barBg: 'linear-gradient(180deg, #98F8ED 0%, #6ED5CA 100%), #6DCBE8',
		title: 'I have a practice but need help',
		buttonContent: 'How do we recruit qualified therapists?',
	},
	{
		id: 2,
		video: video2,
		bg: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 12.9%, rgba(0, 0, 0, 0) 40.32%, #EEBA54 100%)',
		barBg: 'linear-gradient(180deg, #FF731B 0%, rgba(255, 115, 27, 0) 100%), #EEBA54',
		title: 'I want to go into private practice',
		buttonContent: 'I want to go into private practice',
		type: true,
	},
	{
		id: 3,
		video: video3,
		bg: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 13.54%, rgba(0, 0, 0, 0) 38.02%, #54A7D9 100%)',
		barBg: 'linear-gradient(180deg, #54A7D9 0%, #BAE5FF 100%), #BAE5FF',
		title: 'I want to expand my business',
		buttonContent: 'What questions should we put here?',
	},
];
const WhoPerfect = () => {
	return (
		<section className="whoPerfectArea">
			<div className="whoPerfectContent">
				<h2>Who is the Clarity Cooperative Perfect For?</h2>
				<p>
					When you have clarity, you're able to reconnect with your true purpose to make your biggest impact
					out in the world. The Cooperative is perfect for therapists and healers at any stage of their
					careers and business who are looking for reassurance, direction, and want to stay connected to the
					heart of their work.
				</p>
				<Link className="joinBtn" to="/">
					Join The Cooperative <img src={arrow} alt="arrow" />
				</Link>
			</div>
			<ul className="whoVideoItems">
				{videos.map((item) => (
					<li key={item.id}>
						<video autoPlay loop>
							<source src={item.video} type="video/mp4" />
						</video>
						<span className="videoBg" style={{ background: item.bg }}></span>
						<span className="videobarBg" style={{ background: item.barBg }}></span>
						<div className="whoVideoContnet">
							<h4>{item.title}</h4>
							{item.type ? (
								<ReactTypingEffect className="contentType" text={item.buttonContent} />
							) : (
								<ReactTypingEffect className="contentType removeCursor" text={item.buttonContent} />
							)}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};
export default WhoPerfect;
