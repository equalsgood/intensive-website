import React, { ReactNode, useEffect, useState } from 'react';
import cls from './Dropdown.module.css';
import { Text, TextColor, TextWeight } from "shared/components";
import ChevronIcon from "shared/assets/icons/chevron.svg";
import classNames from "classnames";

interface DropdownProps {
    reversed: boolean;
    title: string;
    containerPropClass?: string;
    dropdownHeaderPropClass?: string;
    dropdownPropClass?: string;
    children: ReactNode;
    intersecting?: boolean;
}

interface DropdownHeaderProps {
    reversed: boolean;
    title: string;
    open: boolean;
    id: string;
    dropdownHeaderPropClass?: string;
}

const DropdownHeader = (props: DropdownHeaderProps) => {
    const {reversed, title, dropdownHeaderPropClass, open} = props;
    return (
        <div
            className={classNames('dropdown-header', cls.dropdownHeader, dropdownHeaderPropClass, {[cls.open]: open})}
        >
            <Text
                tag="span"
                color={reversed ? TextColor.MAIN : TextColor.REVERSED}
                weight={TextWeight.SEMI_BOLD}
            >
                {title}
            </Text>
            <ChevronIcon/>
        </div>
    )
}

export const Dropdown = (props: DropdownProps) => {
    const {
        reversed,
        title,
        children,
        containerPropClass,
        dropdownHeaderPropClass,
        dropdownPropClass,
        intersecting
    } = props;
    const [open, setOpen] = useState(false);

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const elements = document.querySelectorAll('.dropdown-header');
        const target = e.target as HTMLElement;
        let targetIncludes = false;

        elements.forEach(el => {
            if(targetIncludes)
                return;
            if(el.contains(target))
                targetIncludes = true;
        })

        if(targetIncludes || target.tagName === 'A')
            setOpen(prev => !prev);
    }

    useEffect(() => {
        if((!reversed && !intersecting) || (reversed && intersecting))
            setOpen(false);
    }, [reversed, intersecting]);

    return (
        <div onClick={(event) => clickHandler(event)} className={classNames(cls.container, containerPropClass, {[cls.reversed]: reversed})}>
            <DropdownHeader
                id='dropdown-header-closed'
                reversed={reversed}
                title={title}
                open={open}
                dropdownHeaderPropClass={dropdownHeaderPropClass}
            />
            <div className={classNames(cls.dropdown, dropdownPropClass, {[cls.hidden]: !open})}>
                <DropdownHeader
                    id='dropdown-header-opened'
                    reversed={reversed}
                    title={title}
                    open={open}
                    dropdownHeaderPropClass={dropdownHeaderPropClass}
                />
                {children}
            </div>
            <div
                onClick={() => setOpen(prev => !prev)}
                className={classNames(cls.overflow, {[cls.hidden]: !open})}
            />
        </div>
    );
};
