import React from 'react';
import { HomeIntroduction, StudyingPrograms, Teachers, WhyWe, Testimonials } from "sections/home";
import { TryForFree, UsefulLinks } from "sections/shared";
import { Divider } from 'shared/components'

const HomePage = () => {
    return (
        <main>
            <HomeIntroduction/>
            <StudyingPrograms/>
            <WhyWe/>
            <Teachers/>
            <Testimonials/>
            <TryForFree/>
            <Divider/>
            <UsefulLinks/>
        </main>
    );
};

export default HomePage;