import React from 'react';
import cls from './Button.module.css';
import classNames from "classnames";

export enum ButtonVariants {
    ACTION = 'action',
}

interface ButtonProps {
    type: 'button' | 'submit',
    text?: string,
    classNamesProps?: string,
    disabled?: boolean,
    onClick?: () => void,
    variant: ButtonVariants,
}
export const Button = (props: ButtonProps) => {
    const { text, classNamesProps, disabled, onClick, variant, type } = props;

    const classes = classNames(cls.button, cls[variant], { [cls.disabled]: disabled }, classNamesProps);
    return (
        <button onClick={onClick} className={classes} disabled={disabled} type={type}>
            {text}
        </button>
    );
};
