import React from 'react';
import cls from "./MobileHeader.module.css";
import {
    Button,
    ButtonVariants,
    CustomLink,
    CustomLinkVariants,
    Logo,
    Text,
    TextColor,
    TextWeight
} from "shared/components";
import { Anchors, HomePaths, RoutePaths } from "app/providers/AppRouter";
import TgIcon from "shared/assets/icons/social/tg-transparent.svg";
import MenuIcon from "shared/assets/icons/menu.svg";
import classNames from "classnames";
import CrossIcon from "shared/assets/icons/cross.svg";

interface MobileNavProps {
    changeMenuState: () => void;
    actionClickHandler: () => void;
    open: boolean;
    fixed: boolean;
    screenWidth: number;
}

export const MobileNav = (props: MobileNavProps) => {
    const { changeMenuState, actionClickHandler, open, fixed, screenWidth } = props;

    return (
        <nav className={cls.nav}>
            <div className={cls.top}>
                <Logo isFull={!fixed}/>
                {(screenWidth < 640 && !fixed)
                    ? undefined
                    : <CustomLink to={Anchors.PHONE.link} variant={CustomLinkVariants.ANCHOR} classNamesProps={cls.phone}>
                        {Anchors.PHONE.name}
                    </CustomLink>
                }
                <CustomLink to={Anchors.TG.link} variant={CustomLinkVariants.ANCHOR_ICON} classNamesProps={classNames(cls.tg, {[cls.expanded]: !fixed})}>
                    <TgIcon/>
                </CustomLink>
                <button type="button" className={cls.button} onClick={() => changeMenuState()}>
                    <MenuIcon className={classNames(cls.menu, {[cls.active]: !open})}/>
                    <CrossIcon className={classNames(cls.cross, {[cls.active]: open})}/>
                </button>
            </div>
            <div className={cls.links}>
                <Text tag="h3" color={fixed ? TextColor.MAIN : TextColor.REVERSED} weight={TextWeight.SEMI_BOLD}>
                    Корисні посилання:
                </Text>
                <CustomLink classNamesProps={cls.link} to={RoutePaths.LOCATIONS}
                            variant={CustomLinkVariants.TEXT}>
                    Розташування
                </CustomLink>
                <CustomLink classNamesProps={cls.link} to={RoutePaths.FAQ} variant={CustomLinkVariants.TEXT}>
                    Відповіді на запитання
                </CustomLink>
                <CustomLink classNamesProps={cls.link} to={RoutePaths.CONTACTS}
                            variant={CustomLinkVariants.TEXT}>
                    Контакти
                </CustomLink>
                <Text classNamesProps={cls.second} tag="h3" color={fixed ? TextColor.MAIN : TextColor.REVERSED}
                      weight={TextWeight.SEMI_BOLD}>
                    Про нас:
                </Text>
                <CustomLink classNamesProps={cls.link} to={HomePaths.WHY_WE} variant={CustomLinkVariants.HASH}>
                    Наші переваги
                </CustomLink>
                <CustomLink classNamesProps={cls.link} to={HomePaths.PROGRAMS}
                            variant={CustomLinkVariants.HASH}>
                    Учбові програми
                </CustomLink>
                <CustomLink classNamesProps={cls.link} to={HomePaths.TEACHERS}
                            variant={CustomLinkVariants.HASH}>
                    Викладачі
                </CustomLink>
                <CustomLink classNamesProps={cls.link} to={HomePaths.TESTIMONIALS}
                            variant={CustomLinkVariants.HASH}>
                    Відгуки
                </CustomLink>
            </div>
            <Button
                onClick={() => actionClickHandler()}
                classNamesProps={cls.actionButton}
                type="button"
                variant={ButtonVariants.ACTION_SECOND}
                text="Записатись на заняття"
            />
        </nav>
    );
};
