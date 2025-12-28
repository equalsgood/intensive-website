import React, { ChangeEvent } from 'react';
import cls from './Input.module.css';
import classNames from "classnames";
import { Text, TextWeight } from "shared/components";

interface InputProps {
    label: string;
    id: string;
    type: 'text' | 'email' | 'area';
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    isValid?: boolean;
    invalidMessage?: string;
    textArea?: boolean;
    placeholder?: string;
    rows?: number;
    maxLength?: number;
}

export const Input = (props: InputProps) => {
    const { label, placeholder, maxLength, rows, textArea, id, type, value, onChange, isValid, invalidMessage } = props;

    const classes = classNames(cls.container, {[cls.invalid]: isValid === false});

    if(textArea) {
        return (
            <div className={classes}>
                <label htmlFor={id} className={cls.label}>{label}</label>
                <textarea
                    className={cls.area}
                    value={value}
                    onChange={e => onChange(e)}
                    placeholder={placeholder || ''}
                    rows={rows}
                    maxLength={maxLength}
                />
            </div>
        )
    }

    return (
        <div className={classes}>
            <label htmlFor={id} className={cls.label}>{label}</label>
            <input
                maxLength={maxLength}
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

