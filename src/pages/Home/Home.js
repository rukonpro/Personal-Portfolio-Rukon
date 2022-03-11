import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Counters from '../Counter/Counter';
import Header from '../Header/Header';
import Portfolios from '../Portfolios/Portfolios';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import './Home.css';

const Home = () => {
    return (
        <div id="home" style={{ overflow: "hidden" }}>
            <Header></Header>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Services></Services>
            <Portfolios></Portfolios>
            <Counters></Counters>
            <Contact></Contact>
        </div>
    );
};

export default Home;