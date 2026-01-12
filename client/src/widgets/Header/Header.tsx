import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import cls from './Header.module.css';
import { useLocation } from "react-router";
import { Anchors, RoutePaths } from "app/providers/AppRouter";
import classNames from "classnames";
import { Logo } from "shared/components";
import TgIcon from "shared/assets/icons/social/tg-transparent.svg";
import { Button, ButtonVariants, CustomLink, CustomLinkVariants } from "shared/components";
import { FixedHeaderNav } from "./components/FixedHeaderNav/FixedHeaderNav";
import { Context } from "app/providers/ContextProvider";
import { NavDropdown } from "./components/NavDropdown/NavDropdown";
import { MobileHeader } from "./components/MobileHeader/MobileHeader";

export const Header = memo(() => {
    const location = useLocation();
    const [isHome, setIsHome] = useState(location.pathname === RoutePaths.HOME);
    const [currentLocation, setCurrentLocation] = useState('');
    const [isIntersecting, setIsIntersecting] = useState(true);
    const { changeModalVisibility, onResize, isHomepageLoaded, screenWidth } = useContext(Context);
    const prevScreen = useRef(screenWidth);

    useEffect(() => {
        const element = document.querySelector('#header');
        const screenWidth = window.innerWidth;
        const widthWithoutScroll = element?.clientWidth;
        onResize(screenWidth, widthWithoutScroll || screenWidth);
    }, []);

    useEffect(() => {
        if (!isHomepageLoaded)
            return;
        const element = document.querySelector('#header');
        const {top, height} = element.getBoundingClientRect();
        if(Math.abs(top) > height)
            setIsIntersecting(false);
    }, [isHomepageLoaded]);

    useEffect(() => {
        let observer = undefined;

        const hash = window.location.hash;

        if(prevScreen.current === screenWidth) {
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

        prevScreen.current = screenWidth;

        return () => {
            observer?.disconnect();
        }
    }, [location, screenWidth]);

    if(screenWidth < 960){
        return (
            <MobileHeader
                screenWidth={screenWidth}
                isHome={isHome}
                intersecting={isIntersecting}
                location={location}
                changeModalVisibility={changeModalVisibility}
            />
        )
    }

    if(!isHome) {
        return (
            <header id="header" className={classNames(cls.fixedHeader, cls.visible)}>
                <FixedHeaderNav intersecting={false} screenWidth={screenWidth} onClick={changeModalVisibility}/>
            </header>
        )
    }

    return (
        <header id="header" className={cls.fullHeader}>
            <nav style={{opacity: isIntersecting ? 1 : 0}} className={cls.fullNav}>
                <Logo isFull/>
                {screenWidth >= 1280
                    ? <div className={cls.fullMainNav}>
                        <CustomLink to={RoutePaths.LOCATIONS} variant={CustomLinkVariants.TEXT}
                                    classNamesProps={cls.textLink}>
                            Розташування
                        </CustomLink>
                        <CustomLink to={RoutePaths.FAQ} variant={CustomLinkVariants.TEXT}
                                    classNamesProps={cls.textLink}>
                            Відповіді на запитання
                        </CustomLink>
                        <CustomLink to={RoutePaths.CONTACTS} variant={CustomLinkVariants.TEXT}
                                    classNamesProps={cls.textLink}>
                            Контакти
                        </CustomLink>
                    </div>
                    : <NavDropdown intersecting={isIntersecting} reversed={false} linkClass={cls.textLink}/>
                }
                <div className={cls.fullActionBlock}>
                    <CustomLink to={Anchors.PHONE.link} variant={CustomLinkVariants.ANCHOR} classNamesProps={cls.phone}>
                        {Anchors.PHONE.name}
                    </CustomLink>
                    <CustomLink to={Anchors.TG.link} variant={CustomLinkVariants.ANCHOR_ICON} classNamesProps={cls.icon}>
                        <TgIcon/>
                    </CustomLink>
                    <Button
                        type="button"
                        variant={ButtonVariants.OUTLINED_REVERSED}
                        text="Записатись"
                        onClick={() => changeModalVisibility(true)}
                    />
                </div>
            </nav>
            <div className={classNames(cls.fixedHeader, {[cls.visible]: !isIntersecting})}>
                <FixedHeaderNav intersecting={isIntersecting} screenWidth={screenWidth} onClick={changeModalVisibility}/>
            </div>
        </header>
    );
});

Header.displayName = 'Header';

