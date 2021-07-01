import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

// images
import arrow from '../../../assets/images/arrow.svg';
import company1 from '../../../assets/images/company/img1.svg';
import company2 from '../../../assets/images/company/img2.svg';
import company3 from '../../../assets/images/company/img3.svg';
import company4 from '../../../assets/images/company/img4.svg';
import company5 from '../../../assets/images/company/img5.svg';

const companys = [
	{
		id: 1,
		image: company1,
		text: '“Instead of scouring Facebook groups for therapists, I’m finally able to get all of my questions answered in one place.” ',
		name: 'WHO DIS',
		subName: 'HLPPLZ',
		color: '#E26262',
	},
	{
		id: 2,
		image: company2,
		text: '“This past year has been difficult, I’m so glad to have found a truly supportive community.”',
		name: 'WHO DIS',
		subName: 'HLPPLZ',
		color: '#FA8C4E',
	},
	{
		id: 3,
		image: company3,
		text: '“As an Associate Director of a growing group practice, I love that I can connect my colleagues with such useful and impactful information.”',
		name: 'Lucas Saiter',
		subName: 'LMHC',
		color: '#777DEF',
	},
	{
		id: 4,
		image: company4,
		text: '“I always believed I had to fight so hard to make a living. Being a part of this community reaffirmed my worth and how I approach my work.”',
		name: 'Jnee Hill',
		subName: 'LSCW',
		color: '#F7B5D5',
	},
	{
		id: 5,
		image: company5,
		text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
		name: 'WHO DIS,',
		subName: 'HLPPLZ',
		color: '#FFCA41',
	},
];

const Company = () => {
	return (
		<section className="companyArea">
			<div className="companyContent">
				<h2>You’re in good company.</h2>
				<p>
					We take care of our community. Trust that you’re in good hands when you join us. See what some of
					our members are saying.
				</p>
				<Link className="joinBtn" to="/">
					View Future Features <img src={arrow} alt="arrow" />
				</Link>
			</div>
			<ul className="companyitems">
				{companys.map((item, i) => (
					<li className={`companyWrap${i + 1}`} key={item.id}>
						<span style={{ border: `7px solid ${item.color}` }} className="companyImg">
							<img src={item.image} alt={item.name} />
						</span>
						<p>{item.text}</p>
						<strong>
							-{item.name}, <span className="subName">{item.subName}</span>
						</strong>
					</li>
				))}
			</ul>
		</section>
	);
};
export default Company;
