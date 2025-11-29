import React from 'react';
import { HomeIntroduction, StudyingPrograms, Teachers, WhyWe, Testimonials } from "sections/home";
import { TryForFree } from "sections/shared";

const HomePage = () => {
    return (
        <main>
            <HomeIntroduction/>
            <StudyingPrograms/>
            <WhyWe/>
            <Teachers/>
            <Testimonials/>
            <TryForFree/>
        </main>
    );
};

export default HomePage;