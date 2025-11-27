import React from 'react';
import { HomeIntroduction, StudyingPrograms, Teachers, WhyWe } from "sections/home";

const HomePage = () => {
    return (
        <main>
            <HomeIntroduction/>
            <StudyingPrograms/>
            <WhyWe/>
            <Teachers/>
        </main>
    );
};

export default HomePage;