import React, { ChangeEvent, FormEvent, useState } from 'react';
import validator from 'validator';
import cls from './TryForFree.module.css';
import { Button, ButtonVariants, Input, PhoneNumberInput, Text, TextColor, TextWeight } from "shared/components";
import { Step, StepProps } from "./components/Step";
import step1 from 'shared/assets/images/steps/step1.png';
import step2 from 'shared/assets/images/steps/step2.png';
import step3 from 'shared/assets/images/steps/step3.png';
import CheckIcon from 'shared/assets/icons/check.svg';
import { E164Number } from "libphonenumber-js";
import { isPossiblePhoneNumber, parsePhoneNumber } from 'react-phone-number-input'

const stepsConfig: Array<StepProps> = [
    { img: step1, text: 'Передзвонимо та відповимо на всі запитання' },
    { img: step2, text: 'Запишемо на безкоштовне пробне заняття' },
    { img: step3, text: 'Після розрахуємо фінальну вартість з урахуванням можливих пільг, поточних знижок та обраного пакету' }
]

export const TryForFree = () => {
    const [submitted, setSubmitted] = useState(true);
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(undefined);
    const [phone, setPhone] = useState<E164Number>();
    const [isPhoneValid, setIsPhoneValid] = useState(undefined);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(undefined);
    const [area, setArea] = useState('');

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

    const onAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setArea(value);
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        if(name.length < 3) {
            setIsNameValid(false);
            return;
        }

        if(!isNameValid || !isPhoneValid || !isEmailValid)
            return;

        console.log(name, phone, email, area);
        setSubmitted(true);
        setName('');
        setIsNameValid(undefined);
        setPhone('' as E164Number);
        setIsPhoneValid(undefined);
        setEmail('');
        setIsEmailValid(undefined);
        setArea('');
    }

    return (
        <section className={cls.section}>
            <Text tag="h2" color={TextColor.MAIN} weight={TextWeight.EXTRA_BOLD} classNamesProps={cls.title}>Спробуйте безкоштовно!</Text>
            <div className={cls.content}>
                {!submitted
                    ? <form onSubmit={(e) => submitHandler(e)} className={cls.formContainer}>
                        <Input label="Ім'я" id="input-name" type="text" value={name} onChange={onNameChange}
                               isValid={isNameValid} invalidMessage="Введіть ім'я"/>
                        <PhoneNumberInput value={phone} onChange={onPhoneChange} isValid={isPhoneValid}/>
                        <Input label="Електронна пошта" id="input-email" type="email" value={email}
                               onChange={onEmailChange} isValid={isEmailValid}
                               invalidMessage="Потрібно вказати правильний email"/>
                        <Input
                            label="Додаткова інфомація (необов'язково)"
                            textArea
                            id="text-area-additional"
                            type="area"
                            placeholder="У цьому полі Ви можете вказати будь-яку інформацію, наприклад: вік учня, рівень знань, бажаний розклад, мета навчання тощо"
                            value={area}
                            onChange={onAreaChange}
                            rows={3}
                            maxLength={200}
                        />
                        <Button type="submit" variant={ButtonVariants.ACTION_SECOND} classNamesProps={cls.button}
                                text="Залишити заявку"/>
                    </form>
                    : <div className={cls.submitted}>
                        <div>
                            <Text tag="h3" color={TextColor.REVERSED} weight={TextWeight.BOLD}>
                                Дякуємо за інформацію!
                            </Text>
                            <Text tag="p" color={TextColor.REVERSED} weight={TextWeight.MEDIUM}>
                                Ми зв'яжемось з Вами найближчим часом
                            </Text>
                        </div>
                        <CheckIcon className={cls.check}/>
                        <Button type="button" variant={ButtonVariants.ACTION_SECOND} classNamesProps={cls.button}
                                text="Повернутись" onClick={() => setSubmitted(false)}/>
                    </div>
                }
                <div className={cls.descriptionContainer}>
                    <Text tag="h3" weight={TextWeight.BOLD} color={TextColor.MAIN} classNamesProps={cls.subtitle}>
                        Ми зв'яжемось з Вами протягом дня
                    </Text>
                    <ul className={cls.steps}>
                        {stepsConfig.map(({img, text}) =>
                            <Step key={text} img={img} text={text}/>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};