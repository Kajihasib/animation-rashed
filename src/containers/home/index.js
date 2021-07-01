import React, { Fragment } from 'react';
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
const HomePage = () => {
	return (
		<Fragment>
			<Helmet>
				<title>Home Page</title>
			</Helmet>
			<LeftSideMenu />
			<Header />
			<Hero />
			<About />
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
