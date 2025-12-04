import React from 'react';
import { QuestionAnswers } from "sections/faq";
import cls from './FaqPage.module.css';
import { TryForFree, UsefulLinks } from "sections/shared";
import { CustomLinkProps, Divider } from "shared/components";
import { RoutePaths } from "app/providers/AppRouter";
import home from "shared/assets/images/home.png";
import map from "shared/assets/images/map.png";
import contactUs from "shared/assets/images/contact-us.png";

const linksConfig: Array<CustomLinkProps> = [
    { to: RoutePaths.HOME, img: home, description: "Сторінка з усією основною інформацією про центр", title: "Домашня сторінка" },
    { to: RoutePaths.LOCATIONS, img: map, description: "Сторінка з розташуванням наших філій", title: "Де ми знаходимось?" },
    { to: RoutePaths.CONTACTS, img: contactUs, description: "Сторінка з контактами репетиторського центру", title: "Хочете зв'язатись?" },
];

const FaqPage = () => {
    return (
        <main className={cls.main}>
            <QuestionAnswers/>
            <Divider/>
            <UsefulLinks links={linksConfig}/>
        </main>
    );
};

export default FaqPage;