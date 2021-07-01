import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

// images
import arrow from '../../../assets/images/arrow.svg';
import icon1 from '../../../assets/images/members/icon1.svg';
import icon2 from '../../../assets/images/members/icon2.svg';
import icon3 from '../../../assets/images/members/icon3.svg';
import icon4 from '../../../assets/images/members/icon4.svg';
import icon5 from '../../../assets/images/members/icon5.svg';

const membership = [
	{
		id: 1,
		title: 'Community Forum',
		icon: icon1,
		content: 'Ask questions, get answers to your most pressing questions.',
	},
	{
		id: 2,
		title: 'Free Resources',
		icon: icon2,
		content:
			'You ask each other and we listen. Signing up gives you access to foundational information and resources essential to your practice business.',
	},
	{
		id: 3,
		title: 'Get + Make referrals',
		icon: icon3,
		content: 'Connect with other therapists and healers to strengthen your professional referral network.',
	},
	{
		id: 4,
		title: 'Request a feature ',
		icon: icon4,
		content: 'Have an idea or an unmet need? Let us know and we’ll see how we can help!',
	},
	{
		id: 5,
		title: 'Founders Circle membership ',
		icon: icon5,
		content:
			'As an early subscriber get exclusive discounts, early  access to new initiatives like health insurance and more.',
	},
];

const Membership = () => {
	return (
		<section className="membershipArea">
			<div className="membershipBg"></div>
			<div className="membarshipTitile">
				<h2>The Benefits Of Membership</h2>
				<Link className="joinBtn" to="/">
					Join The Cooperative <img src={arrow} alt="arrow" />
				</Link>
			</div>
			<ul className="memberItems">
				{membership.map((item) => (
					<li key={item.id} className="memberItem">
						<div className="memberWrap">
							<img src={item.icon} alt={item.title} />
							<h4>{item.title}</h4>
							<p>{item.content}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};
export default Membership;
