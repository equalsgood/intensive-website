import React, { ReactNode } from 'react';
import { HashLink } from 'react-router-hash-link';
import cls from "./CustomLink.module.css";
import { HomePaths, RoutePaths } from "app/providers/AppRouter";
import { Link } from "react-router";
import classNames from "classnames";

export enum CustomLinkVariants {
    LOGO = 'logo',
    CARD = 'card',
    TEXT = 'text',
    ANCHOR = 'anchor',
    ANCHOR_ICON = 'anchorIcon',
    HASH = 'hash',
}

export interface CustomLinkProps {
    children: ReactNode;
    to: RoutePaths | string | HomePaths;
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

    const classes = classNames(cls.link, cls[variant], classNamesProps);

    if(variant === CustomLinkVariants.HASH) {
        const scrollWithOffset = (el: HTMLElement) => {
            const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
            const yOffset = -80;
            window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
        }

        return (
            <HashLink smooth to={to} className={classes} scroll={el => scrollWithOffset(el)}>
                {children}
            </HashLink>
        )
    }

    if(variant === CustomLinkVariants.ANCHOR_ICON || variant === CustomLinkVariants.ANCHOR)
        return (
            <a target="_blank" href={to} className={classes}>
                {children}
            </a>
        )

    if (variant === CustomLinkVariants.CARD)
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

    if (variant === CustomLinkVariants.LOGO || variant === CustomLinkVariants.TEXT)
        return (
            <Link
                to={to}
                className={classes}
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