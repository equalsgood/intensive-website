import React from 'react';
import { HomeIntroduction, StudyingPrograms, WhyWe } from "sections/home";

const HomePage = () => {
    return (
        <main>
            <HomeIntroduction/>
            <StudyingPrograms/>
            <WhyWe/>
        </main>
    );
};

export default HomePage;