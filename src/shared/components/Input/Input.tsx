import React, { ChangeEvent } from 'react';
import cls from './Input.module.css';
import classNames from "classnames";
import { Text, TextWeight } from "shared/components";

interface InputProps {
    label: string;
    id: string;
    type: 'text' | 'email';
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isValid?: boolean;
    invalidMessage?: string;
}

export const Input = (props: InputProps) => {
    const { label, id, type, value, onChange, isValid, invalidMessage } = props;

    const classes = classNames(cls.container, {[cls.invalid]: isValid === false});

    return (
        <div className={classes}>
            <label htmlFor={id} className={cls.label}>{label}</label>
            <input
                type={type}
                className={cls.input}
                value={value}
                onChange={e => onChange(e)}
            />
            {isValid === false &&
                <Text tag='span' weight={TextWeight.MEDIUM} classNamesProps={cls.invalidMessage}>{invalidMessage}</Text>
            }
        </div>
    );
};

