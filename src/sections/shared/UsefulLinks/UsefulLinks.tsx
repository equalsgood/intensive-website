import React from 'react';
import cls from './UsefulLinks.module.css';
import { CustomLink, CustomLinkProps, Text, TextColor, TextWeight } from "shared/components";

interface UsefulLinksProps {
    links: Array<CustomLinkProps>
}

export const UsefulLinks = ({links}: UsefulLinksProps) => {
    return (
        <section className={cls.section}>
            <Text tag="h2" classNamesProps={cls.title} weight={TextWeight.EXTRA_BOLD} color={TextColor.MAIN}>
                Корисні посилання
            </Text>
            <nav className={cls.links}>
                { links.map(({to, title, description, img}) =>
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

