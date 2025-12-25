import React, { useContext, useEffect } from 'react';
import { HomeIntroduction, StudyingPrograms, Teachers, WhyWe, Testimonials } from "sections/home";
import { CustomLinkCardProps, TryForFree, UsefulLinks } from "sections/shared";
import { Divider } from 'shared/components'
import { RoutePaths } from "app/providers/AppRouter";
import questionMark from "shared/assets/images/question-mark.png";
import map from "shared/assets/images/map.png";
import contactUs from "shared/assets/images/contact-us.png";
import { Context } from "app/providers/ContextProvider";

const linksConfig: Array<CustomLinkCardProps> = [
    { to: RoutePaths.FAQ, img: questionMark, description: "Сторінка з відповідями на поширені запитання", title: "Залишились запитання?" },
    { to: RoutePaths.LOCATIONS, img: map, description: "Сторінка з розташуванням наших філій", title: "Де ми знаходимось?" },
    { to: RoutePaths.CONTACTS, img: contactUs, description: "Сторінка з контактами репетиторського центру", title: "Хочете зв'язатись?" },
];

const HomePage = () => {
    const { changeIsHomepageLoaded } = useContext(Context);

    useEffect(() => {
        changeIsHomepageLoaded(true);
        return () => changeIsHomepageLoaded(false);
    }, []);

    return (
        <main>
            <HomeIntroduction/>
            <StudyingPrograms/>
            <WhyWe/>
            <Teachers/>
            <Testimonials/>
            <TryForFree isModal={false}/>
            <Divider/>
            <UsefulLinks links={linksConfig}/>
        </main>
    );
};

export default HomePage;