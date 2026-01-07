import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import validator from 'validator';
import cls from './TryForFree.module.css';
import {
    Button,
    ButtonVariants,
    Input,
    Loader,
    PhoneNumberInput,
    Text,
    TextColor,
    TextWeight
} from "shared/components";
import { Step, StepProps } from "./components/Step";
import step1 from 'shared/assets/images/steps/step1.png';
import step2 from 'shared/assets/images/steps/step2.png';
import step3 from 'shared/assets/images/steps/step3.png';
import CheckIcon from 'shared/assets/icons/check.svg';
import XMark from 'shared/assets/icons/x-mark.svg';
import { E164Number } from "libphonenumber-js";
import { isPossiblePhoneNumber, parsePhoneNumber } from 'react-phone-number-input'
import classNames from "classnames";
import CrossIcon from "shared/assets/icons/cross.svg";
import { Context } from "app/providers/ContextProvider";
import { createBid } from "api/api";
import { useRequest } from "hooks";
import { Turnstile } from '@marsidev/react-turnstile';

const stepsConfig: Array<StepProps> = [
    { img: step1, text: 'Перетелефонуємо та відповімо на всі запитання' },
    { img: step2, text: 'Запишемо на безкоштовне пробне заняття' },
    { img: step3, text: 'Розрахуємо фінальну вартість з урахуванням пільг, поточних знижок та обраного пакета' }
]

interface TryForFreeProps {
    isModal: boolean;
    onClose?: (val: boolean) => void;
}

export const TryForFree = ({ isModal, onClose }: TryForFreeProps) => {
    const { isSubmitted, changeSubmittedStatus, screenWidth, isTablet } = useContext(Context);
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(undefined);
    const [phone, setPhone] = useState<E164Number>();
    const [isPhoneValid, setIsPhoneValid] = useState(undefined);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(undefined);
    const [area, setArea] = useState('');

    const { isError, isLoading, request, setIsError, setIsLoading } = useRequest();

    const [token, setToken] = useState<string | null>(null);

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

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();

        if(name.length < 3) {
            setIsNameValid(false);
            return;
        }

        if(!isNameValid || !isPhoneValid || !isEmailValid || !token)
            return;

        const data = { name, phone, email, desc: area, turnstileToken: token };
        const succeed = await request(() => createBid(data));

        changeSubmittedStatus(succeed);
        setName('');
        setIsNameValid(undefined);
        setPhone('' as E164Number);
        setIsPhoneValid(undefined);
        setEmail('');
        setIsEmailValid(undefined);
        setArea('');
        if(isModal)
            onClose(false);
    }

    const goBack = () => {
        changeSubmittedStatus(false);
        setIsError(false);
        setIsLoading(false);
    };

    return (
        <section className={classNames(cls.section, {[cls.modal]: isModal})}>
            {isModal
                ? <div className={cls.titleContainer}>
                    <Text tag="h2" color={TextColor.MAIN} weight={TextWeight.EXTRA_BOLD} classNamesProps={cls.title}>Спробуйте безкоштовно!</Text>
                    <Button onClick={() => onClose(false)} type="button" variant={ButtonVariants.ICON} icon={<CrossIcon/>}/>
                </div>
                : <Text tag="h2" color={TextColor.MAIN} weight={TextWeight.EXTRA_BOLD} classNamesProps={cls.title}>Спробуйте безкоштовно!</Text>
            }
            <div className={cls.content}>
                {isLoading &&
                    <div className={cls.submitted}>
                        <Loader adjustable />
                    </div>
                }
                {(!isLoading && !isSubmitted && !isError) &&
                    <form onSubmit={(e) => submitHandler(e)} className={cls.formContainer}>
                        <Input label="Ім'я" id="input-name" type="text" value={name} onChange={onNameChange}
                               isValid={isNameValid} invalidMessage="Введіть ім'я" maxLength={254}/>
                        <PhoneNumberInput value={phone} onChange={onPhoneChange} isValid={isPhoneValid}/>
                        <Input label="Електронна пошта" id="input-email" type="email" value={email}
                               onChange={onEmailChange} isValid={isEmailValid}
                               invalidMessage="Потрібно вказати правильний email" maxLength={254}/>
                        <Input
                            label="Додаткова інфомація (необов'язково)"
                            textArea
                            id="text-area-additional"
                            type="area"
                            placeholder="У цьому полі ви можете вказати будь-яку інформацію, наприклад: вік учня, рівень знань, бажаний розклад, мету навчання тощо"
                            value={area}
                            onChange={onAreaChange}
                            rows={screenWidth >= 1280 ? 3 : 4}
                            maxLength={254}
                        />
                        <Turnstile
                            options={{
                                language: 'uk-ua',
                                appearance: 'always',
                                execution: 'render',
                                theme: 'dark',
                                size: screenWidth >= 400 ? 'normal' : 'compact'
                            }}
                            siteKey="0x4AAAAAACKSUwdR_j3IjyAI"
                            onSuccess={(token) => setToken(token)}
                        />
                        <Button disabled={!token} type="submit" variant={ButtonVariants.ACTION_SECOND} classNamesProps={cls.button}
                                text="Залишити заявку"/>
                    </form>
                }
                {(!isLoading && isSubmitted) &&
                    <div className={cls.submitted}>
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
                                text="Повернутись" onClick={goBack}/>
                    </div>
                }
                {(!isLoading && isError) &&
                    <div className={cls.submitted}>
                        <div>
                            <Text tag="h3" color={TextColor.REVERSED} weight={TextWeight.BOLD}>
                                Трапилась помилка!
                            </Text>
                            <Text tag="p" color={TextColor.REVERSED} weight={TextWeight.MEDIUM}>
                                Вибачте за незручності, просимо зв'язатись з нами самостійно за телефоном +380 96 456 24 83
                            </Text>
                        </div>
                        <XMark className={cls.x}/>
                        <Button type="button" variant={ButtonVariants.ACTION_SECOND} classNamesProps={cls.button}
                                text="Повернутись" onClick={goBack}/>
                    </div>
                }
                {((isModal && !isTablet) || !isModal) &&
                    <div className={cls.descriptionContainer}>
                        <Text tag="h3" weight={TextWeight.BOLD} color={TextColor.MAIN} classNamesProps={cls.subtitle}>
                            Ми зв’яжемося з вами протягом дня
                        </Text>
                        <ul className={cls.steps}>
                            {stepsConfig.map(({img, text}) =>
                                <Step key={text} img={img} text={text}/>
                            )}
                        </ul>
                    </div>
                }
            </div>
        </section>
    );
};