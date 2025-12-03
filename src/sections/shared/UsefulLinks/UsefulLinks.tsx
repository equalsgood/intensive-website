import React from 'react';
import cls from './UsefulLinks.module.css';
import { CustomLink, CustomLinkProps, Text, TextColor, TextWeight } from "shared/components";
import { RoutePaths } from "app/providers/AppRouter";
import questionMark from "shared/assets/images/question-mark.png";
import map from "shared/assets/images/map.png";
import contactUs from "shared/assets/images/contact-us.png";


const linksConfig: Array<CustomLinkProps> = [
    { to: RoutePaths.FAQ, img: questionMark, description: "Сторінка з відповідями на поширені запитання", title: "Залишились запитання?" },
    { to: RoutePaths.LOCATIONS, img: map, description: "Сторінка з розташуванням наших філій", title: "Де ми знаходимось?" },
    { to: RoutePaths.CONTACTS, img: contactUs, description: "Сторінка з контактами репетиторського центру", title: "Хочете зв'язатись?" },
];

export const UsefulLinks = () => {
    return (
        <section className={cls.section}>
            <Text tag="h2" classNamesProps={cls.title} weight={TextWeight.EXTRA_BOLD} color={TextColor.MAIN}>
                Корисні посилання
            </Text>
            <nav className={cls.links}>
                { linksConfig.map(({to, title, description, img}) =>
                    <CustomLink
                        key={title}
                        to={to}
                        title={title}
                        description={description}
                        img={img}
                    />
                )}
            </nav>
        </section>
    );
};

