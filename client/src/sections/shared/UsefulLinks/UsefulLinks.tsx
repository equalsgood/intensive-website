import React, { useContext } from 'react';
import cls from './UsefulLinks.module.css';
import { DottedCarousel, Text, TextColor, TextWeight } from "shared/components";
import { CustomLinkCard, CustomLinkCardProps } from "./components/CustomLinkCard";
import { Context } from "app/providers/ContextProvider";

interface UsefulLinksProps {
    links: Array<CustomLinkCardProps>;
    pageLink: CustomLinkCardProps;
}

export const UsefulLinks = ({links, pageLink}: UsefulLinksProps) => {
    const { screenWidth } = useContext(Context);

    return (
        <section className={cls.section}>
            <Text tag="h2" classNamesProps={cls.title} weight={TextWeight.EXTRA_BOLD} color={TextColor.MAIN}>
                Корисні посилання
            </Text>
            {screenWidth >= 800
                ? <nav className={cls.links}>
                    {links.map(({to, title, description, img}) =>
                        <CustomLinkCard
                            key={title}
                            to={to}
                            title={title}
                            description={description}
                            img={img}
                        />
                    )}
                    {(screenWidth >= 800 && screenWidth < 1280) &&
                        <CustomLinkCard
                            to={pageLink.to}
                            title={pageLink.title}
                            description={pageLink.description}
                            img={pageLink.img}
                        />
                    }
                </nav>
                : <DottedCarousel
                    adjusted
                    carouselItems={links.map(({to, title, description, img}) =>
                        <CustomLinkCard
                            key={title}
                            to={to}
                            title={title}
                            description={description}
                            img={img}
                        />
                    )}
                    singleStep={350}
                    wrapperSizesClass={cls.wrapper}
                    containerPropsClass={cls.container}
                    reversed={false}
                />
            }
        </section>
    );
};

