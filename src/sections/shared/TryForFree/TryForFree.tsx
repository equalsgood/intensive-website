import React, { ChangeEvent, FormEvent, useState } from 'react';
import validator from 'validator';
import cls from './TryForFree.module.css';
import { Button, ButtonVariants, Input, PhoneNumberInput, Text, TextColor, TextWeight } from "shared/components";
import { Step, StepProps } from "./components/Step";
import step1 from 'shared/assets/images/steps/step1.png';
import step2 from 'shared/assets/images/steps/step2.png';
import step3 from 'shared/assets/images/steps/step3.png';
import { E164Number } from "libphonenumber-js";
import { isPossiblePhoneNumber, parsePhoneNumber } from 'react-phone-number-input'

const stepsConfig: Array<StepProps> = [
    { img: step1, text: 'Передзвонимо та відповимо на всі запитання' },
    { img: step2, text: 'Запишемо на безкоштовне пробне заняття' },
    { img: step3, text: 'Після розрахуємо фінальну вартість з урахуванням можливих пільг, поточних знижок та обраного пакету' }
]

export const TryForFree = () => {
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(undefined);
    const [phone, setPhone] = useState<E164Number>();
    const [isPhoneValid, setIsPhoneValid] = useState(undefined);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(undefined);

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if(value.length > 2)
            setIsNameValid(true);
        setName(value);
    }

    const onPhoneChange = (value: E164Number) => {
        if(value) {
            if(parsePhoneNumber(value)?.country === 'UA') {
                setIsPhoneValid(isPossiblePhoneNumber(value) && value.length === 13);
            } else {
                setIsPhoneValid(isPossiblePhoneNumber(value))
            }
        }
        setPhone(value);
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setIsEmailValid(validator.isEmail(value));
        setEmail(value);
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        if(name.length < 3) {
            setIsNameValid(false);
            return;
        }

        if(!isNameValid || !isPhoneValid || !isEmailValid)
            return;

        console.log(name, phone, email);
    }

    return (
        <section className={cls.section}>
            <Text tag="h2" color={TextColor.MAIN} weight={TextWeight.EXTRA_BOLD} classNamesProps={cls.title}>Спробуйте безкоштовно!</Text>
            <div className={cls.content}>
                <form onSubmit={(e) => submitHandler(e)} className={cls.formContainer}>
                    <Input label="Ім'я" id="input-name" type="text" value={name} onChange={onNameChange} isValid={isNameValid} invalidMessage="Введіть ім'я" />
                    <PhoneNumberInput value={phone} onChange={onPhoneChange} isValid={isPhoneValid}/>
                    <Input label="Електронна пошта" id="input-email" type="email" value={email} onChange={onEmailChange} isValid={isEmailValid} invalidMessage="Потрібно вказати правильний email" />
                    <Button type="submit" variant={ButtonVariants.ACTION_SECOND} classNamesProps={cls.button} text="Залишити заявку" />
                </form>
                <div className={cls.descriptionContainer}>
                    <Text tag="h3" weight={TextWeight.BOLD} color={TextColor.MAIN} classNamesProps={cls.subtitle}>
                        Ми зв'яжемось з Вами протягом дня
                    </Text>
                    <ul className={cls.steps}>
                        { stepsConfig.map(({img, text}) =>
                            <Step key={text} img={img} text={text} />
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};