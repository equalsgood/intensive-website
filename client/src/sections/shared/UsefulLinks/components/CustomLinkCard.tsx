import React, { useState } from 'react';
import { CustomLink, CustomLinkVariants, Text, TextColor, TextWeight } from "shared/components";
import cls from "./CustomLinkCard.module.css";
import classNames from "classnames";
import Arrow from "shared/assets/icons/arrow.svg";
import { RoutePaths } from "app/providers/AppRouter";

export interface CustomLinkCardProps {
    to: RoutePaths;
    title: string;
    description: string;
    img: string;
}

export const CustomLinkCard = (props: CustomLinkCardProps) => {
    const { to, title, img, description} = props;
    const [hover, setHover] = useState(false);
    const hoverHandler = (hovered: boolean) => {
        setHover(hovered);
    };

    return (
        <CustomLink to={to} variant={CustomLinkVariants.CARD} classNamesProps={cls.link} hoverHandler={hoverHandler}>
            <Text tag="h4" weight={TextWeight.BOLD} color={TextColor.MAIN}>
                {title}
            </Text>
            <Text tag="p" weight={TextWeight.MEDIUM} color={TextColor.MAIN}>
                {description}
            </Text>
            <div className={cls.discover}>
                <Text tag="span" weight={TextWeight.MEDIUM} color={TextColor.MAIN}>відвідати сторінку</Text>
                <div className={classNames(cls.arrow, {[cls.hover]: hover})}>
                    <Arrow/>
                </div>
            </div>
            <img alt={`image describing ${title}`} src={img} className={cls.linkImage}/>
        </CustomLink>
    );
};