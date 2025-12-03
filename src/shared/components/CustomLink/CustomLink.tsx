import React, { useState } from 'react';
import cls from "./CustomLink.module.css";
import { Text, TextColor, TextWeight } from "shared/components";
import classNames from "classnames";
import Arrow from "shared/assets/icons/arrow.svg";
import { RoutePaths } from "app/providers/AppRouter";
import { Link } from "react-router";

export interface CustomLinkProps {
    to: RoutePaths;
    title: string;
    description: string;
    img: string;
}

export const CustomLink = (props: CustomLinkProps) => {
    const { to, title, description, img } = props;
    const [hover, setHover] = useState(false);

    return (
        <Link to={to} className={cls.link} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
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
        </Link>
    );
};