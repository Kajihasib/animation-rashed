import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

// images
import arrow from '../../../assets/images/arrow.svg';
import shape1 from '../../../assets/images/shape1.svg';
import shape2 from '../../../assets/images/shape2.svg';
import shape3 from '../../../assets/images/shape3.svg';
import shape4 from '../../../assets/images/shape4.svg';
import bg from '../../../assets/images/bg/horizon.svg';

const Horizon = () => {
	return (
		<section className="horizonArea">
			<div className="horizonBg">
				<img src={bg} alt="bg" />
			</div>
			<img className="horizonShape1" src={shape1} alt="images" />
			<h2 className="horizonTitle">What Features are On The Horizon?</h2>
			<div className="horizonContent">
				<p>Resources and experts to help you better manage your practice and your life.</p>
				<Link className="joinBtn" to="/">
					View Future Features <img src={arrow} alt="arrow" />
				</Link>
			</div>
			<ul className="horizonImages">
				<li>
					<img src={shape2} alt="images" />
				</li>
				<li>
					<img src={shape3} alt="images" />
				</li>
				<li>
					<img src={shape4} alt="images" />
				</li>
			</ul>
		</section>
	);
};
export default Horizon;
