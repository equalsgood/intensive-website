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
import { Anchors } from "app/providers/AppRouter";

const questionsConfig: Array<SingleQAProps> = [
    // БЛОК 1: ЗНАЙОМСТВО ТА ПЕРШИЙ КРОК
    {
        qw: 'Чи є можливість спробувати навчання безкоштовно?',
        an: 'Так, ми надаємо можливість відвідати перше заняття абсолютно безкоштовно. Це дозволить вам познайомитися з нашою методикою та викладачем без жодних фінансових зобов’язань.'
    },
    {
        qw: 'Чого очікувати від першої зустрічі з викладачем?',
        an: 'Перше заняття завжди проходить в індивідуальному форматі. Його головна мета — це знайомство та діагностика. Ми визначимо актуальний рівень знань студента, обговоримо цілі навчання та узгодимо всі організаційні деталі: від розкладу й навчальної програми до формату домашніх завдань та системи оплати.'
    },
    {
        qw: 'Яка кваліфікація у викладачів центру?',
        an: 'У нашій команді працюють виключно дипломовані спеціалісти з профільною освітою та досвідом викладання. Ми ретельно відбираємо фахівців, які не лише досконало знають свій предмет, а й вміють знайти підхід до кожного студента.'
    },

    // БЛОК 2: ФОРМАТ ТА ГРАФІК
    {
        qw: 'Які формати навчання ви пропонуєте?',
        an: 'Ми проводимо заняття у двох основних форматах: індивідуально (один на один з викладачем) або в мінігрупах. Ви можете обрати той варіант, який найбільше відповідає вашим запитам та комфортному темпу опанування матеріалу.'
    },
    {
        qw: 'Скільки студентів навчається в одній мінігрупі?',
        an: 'Ми свідомо тримаємо формат саме "міні", щоб зберегти якість навчання. Найчастіше це парні заняття, а максимальна кількість студентів у мінігрупи — три особи. Це дозволяє викладачу приділити достатньо уваги кожному.'
    },
    {
        qw: 'Як формуються мінігрупи та що робити, якщо її немає для мого рівня?',
        an: 'При підборі мінігрупи ми завжди враховуємо вік та рівень знань студентів. Якщо на момент вашого звернення мінігрупи відповідного рівня немає, ви зможете розпочати навчання індивідуально за ціною занять у мінігрупі, поки ми не знайдемо когось, хто підійде до вас.'
    },
    {
        qw: 'Чи можна підібрати індивідуальний графік?',
        an: 'Ми завжди намагаємося підлаштуватися під ваш стиль життя. Під час планування ми уточнюємо ваші вільні години та формуємо розклад так, щоб заняття проходили у максимально зручний для вас час.'
    },
    {
        qw: 'Скільки триває один урок?',
        an: 'Академічна година у нашому центрі становить 55 хвилин. Це оптимальний час для ефективної роботи, який дозволяє повноцінно розібрати нову тему та закріпити її на практиці, не викликаючи перевтоми.'
    },
    {
        qw: 'Чи потрібно додатково купувати навчальні посібники?',
        an: 'Ні, вам не доведеться витрачати кошти на додаткову літературу. Ми забезпечуємо студентів усіма необхідними навчальними матеріалами в електронному або друкованому вигляді. Єдине, що ми просимо підготувати для занять — це звичайний зошит на 96 аркушів.'
    },
    // БЛОК 3: ОПЛАТА ТА УМОВИ
    {
        qw: 'Від чого залежить вартість навчання?',
        an: 'Ціна формується залежно від обраного формату (індивідуально чи в мінігрупі) та діючих акційних пропозицій. Щоб отримати актуальний розрахунок та дізнатися про поточні знижки, залиште заявку на сайті або зателефонуйте нам — ми з радістю проконсультуємо вас.'
    },
    {
        qw: 'Як відбувається процес оплати?',
        an: 'Оплата здійснюється щомісяця (зазвичай з 1-го по 5-те число) за майбутній період. Найзручніший спосіб — переказ на банківський рахунок ФОП за реквізитами IBAN. Проте ми завжди готові до діалогу: якщо у вас виникають труднощі з термінами оплати, просто попередьте свого викладача — ми поставимося до ситуації з розумінням.'
    },
    {
        qw: 'Чи зберігаються кошти у разі пропуску заняття?',
        an: 'Ваші кошти не згорають. Якщо ви пропускаєте урок із поважної причини, ми намагаємося призначити відпрацювання в інший зручний день. У разі, якщо відпрацювати заняття технічно неможливо, ми робимо перерахунок і вираховуємо цю суму з оплати за наступний місяць.'
    },
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
                    <Text tag="span" color={TextColor.MAIN} weight={TextWeight.MEDIUM}>Поставте запитання зручним для вас способом</Text>
                    <div className={cls.socials}>
                        <a target="_blank" href={Anchors.TG.link}><TelegramIcon className={cls.social}/></a>
                        <a target="_blank" href={Anchors.WUP.link}><WhatsUpIcon className={cls.social}/></a>
                        <a target="_blank" href={Anchors.VIBER.link}><ViberIcon className={cls.social}/></a>
                    </div>
                    <a target="_blank" href={Anchors.INFO_MAIL.link} className={cls.link}>
                        <MailIcon/>
                        <Text tag="span" color={TextColor.MAIN}>{Anchors.INFO_MAIL.name}</Text>
                    </a>
                    <a target="_blank" href={Anchors.PHONE.link} className={cls.link}>
                        <PhoneIcon className={cls.phoneIcon}/>
                        <Text tag="span" color={TextColor.MAIN}>{Anchors.PHONE.name}</Text>
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

