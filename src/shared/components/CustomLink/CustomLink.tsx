import React, { ReactNode } from 'react';
import cls from "./CustomLink.module.css";
import { RoutePaths } from "app/providers/AppRouter";
import { Link } from "react-router";
import classNames from "classnames";

export enum CustomLinkVariants {
    WRAPPER = 'wrapper',
    CARD = 'card'
}

export interface CustomLinkProps {
    children: ReactNode;
    to: RoutePaths;
    variant: CustomLinkVariants;
    classNamesProps?: string;
    hoverHandler?: (hovered: boolean) => void;
}

export const CustomLink = (props: CustomLinkProps) => {
    const {
        to,
        variant,
        classNamesProps,
        hoverHandler,
        children
    } = props;

    const classes = classNames(cls.link, classNamesProps);

    if(variant === CustomLinkVariants.CARD)
        return (
            <Link
                to={to}
                className={classes}
                onMouseEnter={() => hoverHandler(true)}
                onMouseLeave={() => hoverHandler(false)}
            >
                {children}
            </Link>
        )

    return (
        <Link
            to={to}
            className={cls.link}
            onMouseEnter={() => hoverHandler(true)}
            onMouseLeave={() => hoverHandler(false)}
        >
            {children}
        </Link>
    );
};