import React, { ReactNode } from 'react';
import cls from './Button.module.css';
import classNames from "classnames";

export enum ButtonVariants {
    ACTION = 'action',
    ACTION_SECOND = 'actionSecond',
    SWITCH = 'switch',
    SWITCH_TRANSPARENT = 'switchTransparent',
    OUTLINED_REVERSED = 'outlinedReversed',
    ICON = 'icon'
}

interface ButtonProps {
    type: 'button' | 'submit',
    text?: string,
    classNamesProps?: string,
    disabled?: boolean,
    onClick?: () => void,
    variant: ButtonVariants,
    icon?: ReactNode
}
export const Button = (props: ButtonProps) => {
    const { text, classNamesProps, disabled, onClick, variant, type, icon } = props;

    const classes = classNames(cls.button, cls[variant], { [cls.disabled]: disabled }, classNamesProps);
    return (
        <button onClick={onClick} className={classes} disabled={disabled} type={type}>
            {icon || text}
        </button>
    );
};
