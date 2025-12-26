import React from 'react';
import cls from './ContactsPage.module.css';
import { ContactsSection } from "sections/contacts";
import { Divider } from "shared/components";
import { CustomLinkCardProps, UsefulLinks } from "sections/shared";
import { RoutePaths } from "app/providers/AppRouter";
import home from "shared/assets/images/home.png";
import questionMark from "shared/assets/images/question-mark.png";
import map from "shared/assets/images/map.png";
import contactUs from "shared/assets/images/contact-us.png";

const linksConfig: Array<CustomLinkCardProps> = [
    { to: RoutePaths.HOME, img: home, description: "Сторінка з усією основною інформацією про центр", title: "Домашня сторінка" },
    { to: RoutePaths.FAQ, img: questionMark, description: "Сторінка з відповідями на поширені запитання", title: "Залишились запитання?" },
    { to: RoutePaths.LOCATIONS, img: map, description: "Сторінка з розташуванням наших філій", title: "Де ми знаходимось?" },
];

const pageLink: CustomLinkCardProps = {
    to: RoutePaths.CONTACTS, img: contactUs, description: "Сторінка з контактами репетиторського центру", title: "Хочете зв'язатись?"
}

const ContactsPage = () => {
    return (
        <main className={cls.main}>
            <ContactsSection/>
            <Divider/>
            <UsefulLinks links={linksConfig} pageLink={pageLink}/>
        </main>
    );
};

export default ContactsPage;