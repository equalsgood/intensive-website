import React, { useContext } from 'react';
import cls from './QuestionAnswers.module.css';
import { Text, TextColor, TextWeight } from "shared/components";
import { SingleQA, SingleQAProps } from "./components/SingleQA";
import questionMark from "shared/assets/images/question-mark.png";
import TelegramIcon from "shared/assets/icons/social/tg.svg";
import ViberIcon from "shared/assets/icons/social/viber.svg";
import WhatsUpIcon from "shared/assets/icons/social/wup.svg";
import MailIcon from "shared/assets/icons/social/mail.svg";
import PhoneIcon from "shared/assets/icons/social/phone.svg";
import { Context } from "app/providers/ContextProvider";

const questionsConfig: Array<SingleQAProps> = [
    { qw: 'Скільки коштує навчання у вашій школі?', an: 'менеджер-консультант, щоб розрахувати для вас фінальну вартість курсу. Вона залежить від інтенсивності занять і пакета (від 4 до 128 занять), який ви оберете, а також від можливих пільг і поточних знижок.'},
    { qw: 'Скільки коштує навчання у вашій школі?', an: 'Залиште заявку на навчання, і найближчим часом з вами зв’яжеться наш менеджер-консультант, щоб розрахувати для вас фінальну вартість курсу. Вона залежить від інтенсивності занять і пакета (від 4 до 128 занять), який ви оберете, а також від можливих пільг і поточних знижок.'},
    { qw: 'Скільки коштує навчання у вашій школі?', an: 'а також від можливих пільг і поточних знижок.'},
    { qw: 'Скільки коштує навчання у вашій школі?', an: 'об розрахувати для вас фінальну вартість курсу. Вона залежить від інтенсивності занять і пакета (від 4 до 128 занять), який ви оберете, а також від можливих пільг і поточних знижок.'},
    { qw: 'Скільки коштує навчання у вашій школі?', an: 'Залиште заявку на навчання, і найближчим часом з вами зв’яжеться наш менеджер-консультант, щоб розрахувати для вас фінальну вартість курсу. Вона залежить від інтенсивності занять і пакета (від 4 до 128 занять), який ви оберете, а також від можливих пільг і поточних знижок.'},
    { qw: 'Скільки коштує навчання у вашій школі?', an: 'Залиште заявку на навчання, і найближчим часом з вами зв’яжеться наш менеджер-консультант, щоб розрахувати для вас фінальну вартість курсу. Вона залежить від інтенсивності занять і пакета (від 4 до 128 занять), який ви оберете, а також від можливих пільг і поточних знижок.'},
    { qw: 'Скільки коштує навчання у вашій школі?', an: 'Залиште заявку на навчання, і найближчим часом з вами зв’яжеться наш менеджер-консультант, щоб розрахувати для вас фінальну вартість курсу. Вона залежить від інтенсивності занять і пакета (від 4 до 128 занять), який ви оберете, а також від можливих пільг і поточних знижок.'},
];

const links = {
    telegram: 'https://t.me/tutorartembabak',
    mail: 'mailto:info@intensive.ua',
    phone: 'tel:+380964562483',
}

export const QuestionAnswers = () => {
    const { isMobile } = useContext(Context);
    return (
        <section className={cls.section}>
            <Text tag="h2" color={TextColor.MAIN} weight={TextWeight.SEMI_BOLD}>Є ЗАПИТАННЯ?</Text>
            <Text tag="h1" color={TextColor.MAIN} weight={TextWeight.EXTRA_BOLD}>ДЕКІЛЬКА ВІДПОВІДЕЙ</Text>
            <div className={cls.content}>
                <div className={cls.contacts}>
                    <Text tag="h3" color={TextColor.MAIN} weight={TextWeight.SEMI_BOLD}>Не знайшли відповіді?</Text>
                    <Text tag="span" color={TextColor.MAIN} weight={TextWeight.MEDIUM}>Задайте запитання зручним для Вас
                        способом</Text>
                    <div className={cls.socials}>
                        <a target="_blank" href={links.telegram}><TelegramIcon className={cls.social}/></a>
                        <a target="_blank" href={links.telegram}><WhatsUpIcon className={cls.social}/></a>
                        <a target="_blank" href={links.telegram}><ViberIcon className={cls.social}/></a>
                    </div>
                    <a target="_blank" href={links.mail} className={cls.link}>
                        <MailIcon/>
                        <Text tag="span" color={TextColor.MAIN}>info@intensive.ua</Text>
                    </a>
                    <a target="_blank" href={links.phone} className={cls.link}>
                        <PhoneIcon className={cls.phoneIcon}/>
                        <Text tag="span" color={TextColor.MAIN}>+380 (96) 456 24 83</Text>
                    </a>
                </div>
                <div className={cls.questions}>
                    {questionsConfig.map(({qw, an}) =>
                        <SingleQA isMobile={isMobile} qw={qw} an={an} key={qw}/>
                    )}
                </div>
                <img src={questionMark} alt="question mark image"/>
            </div>
        </section>
    );
};

