import React from 'react';
import { QuestionAnswers } from "sections/faq";
import cls from './FaqPage.module.css';
import { CustomLinkCardProps, UsefulLinks } from "sections/shared";
import { Divider } from "shared/components";
import { RoutePaths } from "app/providers/AppRouter";
import home from "shared/assets/images/home.png";
import map from "shared/assets/images/map.png";
import contactUs from "shared/assets/images/contact-us.png";
import questionMark from "shared/assets/images/question-mark.png";

const linksConfig: Array<CustomLinkCardProps> = [
    { to: RoutePaths.HOME, img: home, description: "Сторінка з усією основною інформацією про центр", title: "Головна сторінка" },
    { to: RoutePaths.LOCATIONS, img: map, description: "Сторінка з розташуванням наших філій", title: "Де ми розташовані?" },
    { to: RoutePaths.CONTACTS, img: contactUs, description: "Сторінка з контактами репетиторського центру", title: "Бажаєте зв’язатися?" },
];

const pageLink: CustomLinkCardProps = {
    to: RoutePaths.FAQ, img: questionMark, description: "Сторінка з відповідями на поширені запитання", title: "Залишились запитання?"
}

const FaqPage = () => {
    return (
        <main className={cls.main}>
            <QuestionAnswers/>
            <Divider/>
            <UsefulLinks links={linksConfig} pageLink={pageLink}/>
        </main>
    );
};

export default FaqPage;