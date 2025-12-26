import React from 'react';
import { CustomLink, CustomLinkVariants, Dropdown } from "shared/components";
import cls from './NavDropdown.module.css';
import classNames from "classnames";
import { RoutePaths } from "app/providers/AppRouter";

interface NavDropdownProps {
    reversed: boolean;
    intersecting: boolean;
    linkClass: string;
}

export const NavDropdown = (props: NavDropdownProps) => {
    const { reversed, linkClass, intersecting } = props;

    return (
        <Dropdown
            intersecting={intersecting}
            reversed={reversed}
            title="Навігація"
            containerPropClass={cls.container}
            dropdownHeaderPropClass={classNames(cls.dropdownHeader, {[cls.reversed]: reversed})}
            dropdownPropClass={cls.dropdown}
        >
            <CustomLink to={RoutePaths.LOCATIONS} variant={CustomLinkVariants.TEXT}
                        classNamesProps={classNames(linkClass)}>
                Розташування
            </CustomLink>
            <CustomLink to={RoutePaths.FAQ} variant={CustomLinkVariants.TEXT}
                        classNamesProps={classNames(linkClass)}>
                Відповіді на запитання
            </CustomLink>
            <CustomLink to={RoutePaths.CONTACTS} variant={CustomLinkVariants.TEXT}
                        classNamesProps={classNames(linkClass)}>
                Контакти
            </CustomLink>
        </Dropdown>
    );
};
