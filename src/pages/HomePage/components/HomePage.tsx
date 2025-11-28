import React from 'react';
import { HomeIntroduction, StudyingPrograms, Teachers, WhyWe, Testimonials } from "sections/home";

const HomePage = () => {
    return (
        <main>
            <HomeIntroduction/>
            <StudyingPrograms/>
            <WhyWe/>
            <Teachers/>
            <Testimonials/>
        </main>
    );
};

export default HomePage;