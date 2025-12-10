import React, { memo, useEffect, useState } from 'react';
import cls from './Header.module.css';
import { useLocation } from "react-router";
import { Anchors, RoutePaths } from "app/providers/AppRouter";
import classNames from "classnames";
import { Logo } from "shared/components";
import TgIcon from "shared/assets/icons/social/tg-transparent.svg";
import { Button, ButtonVariants, CustomLink, CustomLinkVariants } from "shared/components";
import { FixedHeaderNav } from "./components/FixedHeaderNav/FixedHeaderNav";

export const Header = memo(() => {
    const location = useLocation();
    const [isHome, setIsHome] = useState(location.pathname === RoutePaths.HOME);
    const [currentLocation, setCurrentLocation] = useState('');
    const [isIntersecting, setIsIntersecting] = useState(true);

    useEffect(() => {
        let observer = undefined;

        const hash = window.location.hash;

        if(currentLocation === location.pathname && !hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            } as unknown as ScrollOptions);
        } else if(!hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            } as unknown as ScrollOptions);
        }

        setCurrentLocation(location.pathname);

        if(location.pathname === RoutePaths.HOME) {
            setIsHome(true);
            const target = document.querySelector('#header');
            const callback = (entries: IntersectionObserverEntry[]) => {
                const { isIntersecting} = entries[0];
                setIsIntersecting(isIntersecting);
            };
            observer = new IntersectionObserver(callback);
            observer.observe(target);
        }
        else {
            setIsHome(false);
        }

        return () => {
            observer?.disconnect();
        }
    }, [location]);

    if(!isHome) {
        return (
            <header id="header" className={classNames(cls.fixedHeader, cls.visible)}>
                <FixedHeaderNav/>
            </header>
        )
    }

    return (
        <header id="header" className={cls.fullHeader}>
            <nav className={cls.fullNav}>
                <Logo isFull/>
                <div className={cls.fullMainNav}>
                    <CustomLink to={RoutePaths.LOCATIONS} variant={CustomLinkVariants.TEXT}
                                classNamesProps={cls.textLink}>
                        Розташування
                    </CustomLink>
                    <CustomLink to={RoutePaths.FAQ} variant={CustomLinkVariants.TEXT} classNamesProps={cls.textLink}>
                        Відповіді на запитання
                    </CustomLink>
                    <CustomLink to={RoutePaths.CONTACTS} variant={CustomLinkVariants.TEXT}
                                classNamesProps={cls.textLink}>
                        Контакти
                    </CustomLink>
                </div>
                <div className={cls.fullActionBlock}>
                    <CustomLink to={Anchors.PHONE} variant={CustomLinkVariants.ANCHOR} classNamesProps={cls.phone}>
                        +380 (96) 456-24-83
                    </CustomLink>
                    <CustomLink to={Anchors.TG} variant={CustomLinkVariants.ANCHOR_ICON} classNamesProps={cls.icon}>
                        <TgIcon/>
                    </CustomLink>
                    <Button type="button" variant={ButtonVariants.OUTLINED_REVERSED} text="Записатись"/>
                </div>
            </nav>
            <div className={classNames(cls.fixedHeader, {[cls.visible]: !isIntersecting})}>
                <FixedHeaderNav/>
            </div>
        </header>
    );
});

Header.displayName = 'Header';

