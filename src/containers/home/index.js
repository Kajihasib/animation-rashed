import React, { Fragment, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

// compoennst
import Header from "../../components/header";
import LeftSideMenu from "../../components/leftmenu";
import Hero from "../../components/home/hero";
import About from "../../components/home/about";
import Service from "../../components/home/service";
import WhoPerfect from "../../components/home/whoPerfect";
import FeaturedResources from "../../components/home/resources";
import Membership from "../../components/home/membership";
import Horizon from "../../components/home/horizon";
import Company from "../../components/home/company";
import Footer from "../../components/footer";
import aboutBg from "../../assets/images/bg/about-bg.svg";
import serviceBg from "../../assets/images/bg/service.svg";
import "./style.scss";
const HomePage = () => {
  const bg1Ref = useRef();
  const bg2Ref = useRef();
  const aboutRef = useRef();
  const serviceRef = useRef();
  useEffect(() => {
    // variables
    const distance = 160;

    if (bg1Ref) {
      bg1Ref.current.style.background = "#ebfaff";
      bg1Ref.current.style.width = "60%";
    }
    if (bg2Ref) {
      bg2Ref.current.style.background = `url(${aboutBg})`;
      bg2Ref.current.style.width = "60%";
    }
    document.addEventListener("scroll", function () {
      const totalVisiable = Math.round(window.pageYOffset + window.innerHeight);

      // change bg while visiting about section
      if (aboutRef && serviceRef) {
        const aboutPosition = aboutRef.current.offsetTop + distance;
        const servicePosition = serviceRef.current.offsetTop + distance;

        console.log(totalVisiable >= servicePosition);

        // while about section arived
        if (
          totalVisiable >= aboutPosition &&
          totalVisiable <= servicePosition
        ) {
          console.log("in about");
          bg2Ref.current.style.width = "100%";
          bg2Ref.current.style.opacity = "1";

          bg1Ref.current.style.opacity = "0";
          bg1Ref.current.style.background = `url(${serviceBg})`;
          bg1Ref.current.style.width = "100%";
        } else if (totalVisiable <= aboutPosition) {
          console.log("in hero");
          // going back to first section
					bg1Ref.current.style.background = "#ebfaff";
          bg1Ref.current.style.opacity = "0";
          bg1Ref.current.style.width = "60%";
          bg2Ref.current.style.opacity = "0";
          bg2Ref.current.style.width = "60%";
        } else if (totalVisiable >= servicePosition) {
          console.log("in service");
          // while about section arived
          bg2Ref.current.style.background = `url(${serviceBg})`;
          bg2Ref.current.style.width = "40%";
          bg1Ref.current.style.opacity = "0";
          bg1Ref.current.style.width = "40%";
        }
      }
    });
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <LeftSideMenu />
      <Header />
      <div ref={bg2Ref} className="bg-anim"></div>
      <div ref={bg1Ref} className="bg-anim"></div>
      <Hero />
      <About ref={aboutRef} />
      <Service ref={serviceRef} />
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
