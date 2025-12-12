import cls from './PhoneNumberInput.module.css';
import PhoneInput, { formatPhoneNumber, isValidPhoneNumber } from 'react-phone-number-input';
import './PhoneNumberInput.css';
import { E164Number } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';
import classNames from 'classnames';
import ukrainianLabels from 'react-phone-number-input/locale/ua.json'
import { Text, TextWeight } from "shared/components";
import React from "react";

interface PhoneNumberInputProps {
    value: E164Number | undefined;
    onChange: (value: E164Number | undefined) => void;
    classNamesProps?: string;
    isValid?: boolean;
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
    const { value, onChange, classNamesProps, isValid} = props;

    const changeHandler = (value: E164Number | undefined) => {
        onChange(value);
    };

    return (
        <div className={classNames('phone-number-input', cls.container, classNamesProps, { ['phone-number-input-error']: isValid === false })}>
            <label className={classNames(cls.label, {[cls.invalid]: isValid === false})}>Номер телефону</label>
            <PhoneInput
                labels={ukrainianLabels}
                international
                limitMaxLength
                countryCallingCodeEditable={false}
                defaultCountry="UA"
                placeholder="Enter phone number"
                value={value}
                onChange={changeHandler}
            />
            {isValid === false &&
                <Text tag='span' weight={TextWeight.MEDIUM} classNamesProps={cls.invalidMessage}>Введіть правильний номер телефону</Text>
            }
        </div>
    );
};