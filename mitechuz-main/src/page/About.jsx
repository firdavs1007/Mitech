import React from 'react';
import AboutCall from '../component/AboutePage/AboutCall';
import AbouteMain from '../component/AboutePage/AbouteMain';
import AboutProjects from '../component/AboutePage/AboutProjects';
import OurCompany from '../component/AboutePage/OurCompany';
import Resourse from '../component/AboutePage/Resourse';
import Solution from '../component/AboutePage/Solution';

function About(props) {
    return (
        <div>
            <AbouteMain />
            <OurCompany />
            <AboutProjects />
            <Resourse />
            <Solution />
            <AboutCall />
        </div>
    );
}

export default About;