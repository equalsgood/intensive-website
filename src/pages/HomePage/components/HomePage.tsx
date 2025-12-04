import React from 'react';
import { HomeIntroduction, StudyingPrograms, Teachers, WhyWe, Testimonials } from "sections/home";
import { TryForFree, UsefulLinks } from "sections/shared";
import { CustomLinkProps, Divider } from 'shared/components'
import { RoutePaths } from "app/providers/AppRouter";
import questionMark from "shared/assets/images/question-mark.png";
import map from "shared/assets/images/map.png";
import contactUs from "shared/assets/images/contact-us.png";

const linksConfig: Array<CustomLinkProps> = [
    { to: RoutePaths.FAQ, img: questionMark, description: "Сторінка з відповідями на поширені запитання", title: "Залишились запитання?" },
    { to: RoutePaths.LOCATIONS, img: map, description: "Сторінка з розташуванням наших філій", title: "Де ми знаходимось?" },
    { to: RoutePaths.CONTACTS, img: contactUs, description: "Сторінка з контактами репетиторського центру", title: "Хочете зв'язатись?" },
];

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
            <UsefulLinks links={linksConfig}/>
        </main>
    );
};

export default HomePage;