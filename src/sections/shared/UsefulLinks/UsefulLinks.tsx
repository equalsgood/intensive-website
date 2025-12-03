import React from 'react';
import cls from './UsefulLinks.module.css';
import { Text, TextColor, TextWeight } from "shared/components";
import { Link } from "react-router";

export const UsefulLinks = () => {
    return (
        <section className={cls.section}>
            <Text tag="h2" classNamesProps={cls.title} weight={TextWeight.EXTRA_BOLD} color={TextColor.MAIN}>
                Корисні посилання
            </Text>
            <nav className={cls.links}>
                <Link to='/about' className={cls.link}>

                </Link>
            </nav>
        </section>
    );
};

