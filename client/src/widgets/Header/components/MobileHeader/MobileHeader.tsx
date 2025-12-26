import React, { useEffect, useState } from 'react';
import cls from './MobileHeader.module.css';
import classNames from "classnames";
import { Location } from "react-router";
import { MobileNav } from "widgets/Header/components/MobileHeader/MobileNav";

interface MobileHeaderProps {
    intersecting: boolean;
    changeModalVisibility: (val: boolean) => void;
    location: Location;
}
export const MobileHeader = (props: MobileHeaderProps) => {
    const { changeModalVisibility, location, intersecting } = props;
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
    return (
        <header id="header" className={classNames(cls.header, {[cls.opened]: open})}>
            <MobileNav
                fixed={false}
                changeMenuState={() => setOpen(prev => !prev)}
                actionClickHandler={() => clickHandler()}
                open={open}
            />
        </header>
    );
};