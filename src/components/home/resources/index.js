import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

// images
import arrow from '../../../assets/images/arrow.svg';

const featureds = [
	{
		id: 1,
		label: 'New',
		category: 'Technology',
		title: 'How to select the best EHR',
		background: '#E26262',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
	},
	{
		id: 2,
		label: 'New',
		category: 'Technology',
		title: 'Comparing telehealth systems',
		background: '#777DEF',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
	},
	{
		id: 3,
		label: 'New',
		category: 'Technology',
		title: 'How to start/run a hybrid practice without burning out  ',
		background: '#FFCA41',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
	},
	{
		id: 4,
		label: 'New',
		category: 'Marketing',
		title: 'A manageable guide on marketing/branding',
		background: '#9BDCD5',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
	},
	{
		id: 5,
		label: 'New',
		category: 'BEST PRACTICES',
		title: "Know Your Worth/How to charge what you're worth",
		background: '#FA8C4E',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
	},
	{
		id: 6,
		label: 'New',
		category: 'BEST PRACTICES',
		title: 'Solo practice or group practice?',
		background: '#F7B5D5',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
	},
];

const FeaturedResources = () => {
	return (
		<section className="featuredResourcesArea">
			<div className="featuredSectionTitle">
				<h2>Featured Resources</h2>
				<Link className="joinBtn" to="/">
					Browse Our Featured Resources <img src={arrow} alt="arrow" />
				</Link>
			</div>
			<div className="featuredResourcesWrapper">
				<h4 className="featuredTitle">Don’t they look helpful?</h4>
				<ul className="featuredResourcesItems">
					{featureds.map((item) => (
						<li style={{ borderBottom: `7px solid ${item.background}` }} className="featuredResourceWrap">
							<span className="label">{item.label}</span>
							<span className="subtitle">{item.category}</span>
							<h4>{item.title}</h4>
							<p>{item.content}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
export default FeaturedResources;
