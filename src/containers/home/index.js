import React, { Fragment, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

// compoennst
import Header from '../../components/header';
import LeftSideMenu from '../../components/leftmenu';
import Hero from '../../components/home/hero';
import About from '../../components/home/about';
import Service from '../../components/home/service';
import WhoPerfect from '../../components/home/whoPerfect';
import FeaturedResources from '../../components/home/resources';
import Membership from '../../components/home/membership';
import Horizon from '../../components/home/horizon';
import Company from '../../components/home/company';
import Footer from '../../components/footer';
import aboutBg from '../../assets/images/bg/about-bg.svg';
import './style.scss'
const HomePage = () => {
	const bgRef = useRef();
	const bg1Ref = useRef();
	const aboutRef = useRef();
	useEffect(() => {

		// variables
		const distance = 160;

		if(bgRef){
			bgRef.current.style.background = '#ebfaff';
			bgRef.current.style.width = '60%';
		}
		if(bg1Ref){
			bg1Ref.current.style.background = `url(${aboutBg})`;
			bg1Ref.current.style.width = '60%';
		}
		document.addEventListener('scroll', function(){
			const totalVisiable = Math.round(window.pageYOffset+window.innerHeight);

			// change bg while visiting about section
			if(aboutRef){
				const myPosition = aboutRef.current.offsetTop + distance;

				// check permision to show my magic now
				if(totalVisiable >= myPosition){
					bgRef.current.style.opacity = '0';
					bgRef.current.style.width = '100%';
					bg1Ref.current.style.opacity = '1';
					bg1Ref.current.style.width = '100%';
				} else if(totalVisiable <= myPosition){
					// going back to first section
					bgRef.current.style.opacity = '1';
					bgRef.current.style.width = '60%';
					bg1Ref.current.style.opacity = '0';
					bg1Ref.current.style.width = '60%';
				} else{
					// rollback for all/default situation
					bgRef.current.style.opacity = '1';
					bg1Ref.current.style.opacity = '0';
				}
			}
		})
	}, [])

	return (
		<Fragment>
			<Helmet>
				<title>Home Page</title>
			</Helmet>
			<LeftSideMenu />
			<Header />
			<div ref={bg1Ref} className="bg-anim"></div>
			<div ref={bgRef} className="bg-anim"></div>
			<Hero />
			<About ref={aboutRef} />
			<Service />
			<WhoPerfect />
			<FeaturedResources />
			<Membership />
			<Horizon />
			<Company />
			<Footer />
		</Fragment>
	);
};
export default HomePage;
