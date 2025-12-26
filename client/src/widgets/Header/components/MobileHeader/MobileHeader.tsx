import React, { useEffect, useState } from 'react';
import cls from './MobileHeader.module.css';
import classNames from "classnames";
import { Location } from "react-router";
import { MobileNav } from "widgets/Header/components/MobileHeader/MobileNav";

interface MobileHeaderProps {
    intersecting: boolean;
    isHome: boolean;
    changeModalVisibility: (val: boolean) => void;
    location: Location;
    screenWidth: number;
}
export const MobileHeader = (props: MobileHeaderProps) => {
    const { isHome, changeModalVisibility, location, intersecting, screenWidth } = props;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [location]);

    useEffect(() => {
        if(open)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'auto';
    }, [open]);

    const clickHandler = () => {
        changeModalVisibility(true);
        setOpen(false);
    }

    if(!isHome)
        return (
            <header id="header" className={classNames(cls.header, cls.fixed, {[cls.opened]: open, [cls.visible]: true})}>
                <MobileNav
                    screenWidth={screenWidth}
                    fixed
                    changeMenuState={() => setOpen(prev => !prev)}
                    actionClickHandler={() => clickHandler()}
                    open={open}
                />
            </header>
        );

    return (
        <header id="header" className={classNames(cls.header, {[cls.opened]: open && intersecting, [cls.fixed]: false})}>
            <MobileNav
                screenWidth={screenWidth}
                fixed={false}
                changeMenuState={() => setOpen(prev => !prev)}
                actionClickHandler={() => clickHandler()}
                open={open}
            />
            <div className={classNames(cls.header, cls.fixed, {[cls.opened]: open && !intersecting, [cls.visible]: !intersecting})}>
                <MobileNav
                    screenWidth={screenWidth}
                    fixed
                    changeMenuState={() => setOpen(prev => !prev)}
                    actionClickHandler={() => clickHandler()}
                    open={open}
                />
            </div>
        </header>
    );
};