import React from 'react';
import cls from "../../Header.module.css";
import { Logo } from "shared/components";
import { Button, ButtonVariants, CustomLink, CustomLinkVariants } from "shared/components";
import { Anchors, RoutePaths } from "app/providers/AppRouter";
import TgIcon from "shared/assets/icons/social/tg-transparent.svg";
import { NavDropdown } from "widgets/Header/components/NavDropdown/NavDropdown";

interface FixedHeaderNavProps {
    onClick: (val: boolean) => void;
    screenWidth: number;
    intersecting: boolean;
}

export const FixedHeaderNav = ({onClick, screenWidth, intersecting}: FixedHeaderNavProps) => {
    return (
        <nav className={cls.fullNav}>
            <div className={cls.fullMainNav}>
                <Logo isFull={false}/>
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
                    : <NavDropdown intersecting={intersecting} reversed linkClass={cls.textLink}/>
                }
            </div>
            <div className={cls.fullActionBlock}>
                <CustomLink to={Anchors.PHONE} variant={CustomLinkVariants.ANCHOR} classNamesProps={cls.phone}>
                    +380 (96) 456-24-83
                </CustomLink>
                <CustomLink to={Anchors.TG} variant={CustomLinkVariants.ANCHOR_ICON} classNamesProps={cls.icon}>
                    <TgIcon/>
                </CustomLink>
                <Button type="button" variant={ButtonVariants.ACTION} text="Записатись на заняття"
                        classNamesProps={cls.button} onClick={() => onClick(true)}/>
            </div>
        </nav>
    );
};

