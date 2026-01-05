import React from 'react';
import cls from './MapSection.module.css';
import { Text, TextColor, TextWeight } from "shared/components";
import ukraineMap from "shared/assets/images/ukraine-map.png";
import logo from "shared/assets/images/short-logo.png";

export const MapSection = () => {
    return (
        <section className={cls.section}>
            <Text tag="h1" color={TextColor.MAIN} weight={TextWeight.EXTRA_BOLD}>
                Ми розташовані в місті Дніпро
            </Text>
            <Text tag="p" color={TextColor.MAIN} weight={TextWeight.SEMI_BOLD}>
                На цій сторінці ви можете переглянути адреси філій у м. Дніпро та обрати найзручніший формат: заняття в репетиторському центрі чи онлайн.
            </Text>
            <div className={cls.mapWrapper}>
                <img className={cls.map} src={ukraineMap} alt="ukraine map"/>
                <img className={cls.logo} src={logo} alt="ukraine map"/>
            </div>
        </section>
    );
};