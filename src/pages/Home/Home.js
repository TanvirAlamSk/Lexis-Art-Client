import React from 'react';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import ProjectSummarySection from '../../components/ProjectSummarySection/ProjectSummarySection';
import Services from '../../components/Services/Services';
import Projects from '../../components/Projects/Projects';
import Contract from '../../components/Contract/Contract';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <ProjectSummarySection></ProjectSummarySection>
            <Services></Services>
            <Projects></Projects>
            <Contract></Contract>
        </div>
    );
};

export default Home;