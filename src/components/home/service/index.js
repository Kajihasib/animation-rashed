import React, {forwardRef} from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

// images
import arrow from '../../../assets/images/arrow.svg';
// import serviceBg from '../../../assets/images/bg/service.svg';
import scrollText from '../../../assets/images/scroll.svg';
import angleDown from '../../../assets/images/angle-down.svg';
const service = [
	{
		id: 1,
		title: 'Made for therapists, by therapists',
		content:
			'We cover the most pressing topics and pain points for private practice therapists because we’ve been where you are.',
	},
	{
		id: 2,
		title: 'Confidently grow your practice',
		content:
			'Rest easy knowing that our resources are vetted by experts and designed to keep you in the loop on the latest topics and trends in the field.',
	},
	{
		id: 3,
		title: 'Find your people',
		content: 'Join our community of therapists and healers to share ideas and get support.',
	},
	{
		id: 4,
		title: 'Manage burnout',
		content:
			'Everything we offer you is designed with minimizing burnout in mind: how much you have to process, learn, and review in order to succeed.',
	},
	{
		id: 5,
		title: 'Focus on what matters',
		content:
			'Create a thriving practice that allows you to spend less time worrying and more time doing what you do best - helping others.',
	},
	{
		id: 6,
		title: 'Stay in the Know',
		content: 'We deep dive into our community to see what you’re asking each other. Then we get you the answers.',
	},
	{
		id: 7,
		title: 'Get direction from experts',
		content:
			'You don’t have to be a self-proclaimed DIYer to succeed. We’re here to help guide you through the information that’s essential to your success',
	},
	{
		id: 8,
		title: 'Rest Assured ',
		content:
			'End each day knowing that you are practicing ethically and can rely on a community of therapists and experts to support you whenever you’re in doubt.',
	},
];

const Service = forwardRef((props, ref) => {
	return (
		<section ref={ref} className="serviceArea">
			{/* <div className="serviceBg">
				<img src={serviceBg} alt="bg" />
			</div> */}
			<div className="scrollBtn serviceScroll">
				<img className="scrolText" src={scrollText} alt="text" />
				<img className="angleText" src={angleDown} alt="angle" />
			</div>
			<div className="serviceContent">
				<h2>The Cooperative exists to help therapists get their needs met.</h2>
				<p className="serviceSub">You take care of others all day. Let us take care of you.</p>
				<p className="text">
					You shouldn’t need an MBA or have to spend hours wading through podcasts, DIY tutorials, and endless
					how-to guides to find the answers you need. At the Cooperative, we do the digging for you: rest easy
					knowing our information is researched and vetted by experts and designed to keep you in the loop on
					the latest topics and trends in our field.
				</p>
				<Link className="joinBtn" to="/">
					Join The Cooperative <img src={arrow} alt="arrow" />
				</Link>
			</div>
			<div className="serviceItemsWrap">
				<ul className="serviceItem">
					{service.map((item) => (
						<li key={item.id}>
							<h4>{item.title}</h4>
							<p>{item.content}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
});
export default Service;
