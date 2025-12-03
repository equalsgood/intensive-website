import React, { memo, useContext, useEffect, useState } from 'react';
import cls from './Header.module.css';
import { useLocation } from "react-router";
import { RoutePaths } from "app/providers/AppRouter";
import classNames from "classnames";

export const Header = memo(() => {
    const location = useLocation();
    const [isHome, setIsHome] = useState(location.pathname === RoutePaths.HOME);
    const [isIntersecting, setIsIntersecting] = useState(true);

    useEffect(() => {
        let observer = undefined;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        } as unknown as ScrollOptions);

        if(location.pathname === RoutePaths.HOME) {
            setIsHome(true);
            const target = document.querySelector('#header');
            const callback = (entries: IntersectionObserverEntry[]) => {
                const { isIntersecting} = entries[0];
                setIsIntersecting(isIntersecting);
                console.log(isIntersecting);
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
    }, [location.pathname]);

    if(!isHome) {
        return (
            <header id="header" className={classNames(cls.headerFixed, cls.visible)}>

            </header>
        )
    }

    return (
        <header id="header" className={cls.header}>
            <div className={classNames(cls.headerFixed, {[cls.visible]: !isIntersecting})}>

            </div>
        </header>
    );
});

Header.displayName = 'Header';

