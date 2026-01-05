import React, { useContext } from 'react';
import cls from './Footer.module.css';
import {
    Button,
    ButtonVariants,
    CustomLink,
    CustomLinkVariants,
    Logo,
    Text,
    TextColor,
    TextWeight
} from "shared/components";
import Mastercard from 'shared/assets/icons/payment/mastercard-1.svg';
import Mastercard2 from 'shared/assets/icons/payment/mastercard-2.svg';
import Visa from 'shared/assets/icons/payment/visa-1.svg';
import Visa2 from 'shared/assets/icons/payment/verified-by-visa.svg';
import { Anchors, HomePaths, RoutePaths } from "app/providers/AppRouter";
import TelegramIcon from "shared/assets/icons/social/tg.svg";
import WhatsUpIcon from "shared/assets/icons/social/wup.svg";
import ViberIcon from "shared/assets/icons/social/viber.svg";
import InstIcon from "shared/assets/icons/social/inst.svg";
import { Context } from "app/providers/ContextProvider";

export const Footer = () => {
    const year = new Date().getFullYear();
    const { changeModalVisibility } = useContext(Context);

    return (
        <footer className={cls.footer}>
            <nav className={cls.nav}>
                <div className={cls.logoColumn}>
                    <Logo isFull/>
                    <Text tag="p" color={TextColor.TRANSPARENT} weight={TextWeight.NORMAL} classNamesProps={cls.info}>
                        ЮРИДИЧНА ІНФОРМАЦІЯ<br/>
                        ФОП Бабак Артем Володимирович
                    </Text>
                    <Text tag="p" color={TextColor.TRANSPARENT} weight={TextWeight.NORMAL} classNamesProps={cls.info}>
                        Юридична адреса<br/>
                        49000, Дніпро, <br/>вул. Театральна, буд. 3, каб. 1
                    </Text>
                    <Text tag="p" color={TextColor.TRANSPARENT} weight={TextWeight.NORMAL} classNamesProps={cls.info}>
                        Реквізити<br/>
                        Рахунок №<br/>UA243077700000026009711158064<br/>
                        ЄДРПОУ <br/>3676710975
                    </Text>
                    <Text tag="p" color={TextColor.TRANSPARENT} weight={TextWeight.NORMAL} classNamesProps={cls.info}>
                        Акціонерне товаривство <br/>«Акцент-Банк»<br/>
                        КОД ЄДРПОУ <br/>14360080 <br/>МФО <br/>307770
                    </Text>
                    <div className={cls.payment}>
                        <Mastercard className={cls.visa1}/>
                        <Mastercard2 className={cls.visa2}/>
                        <Visa className={cls.visa1}/>
                        <Visa2 className={cls.visa2}/>
                    </div>
                </div>
                <div className={cls.linksContainer}>
                    <div className={cls.links}>
                        <Text tag="h3" color={TextColor.REVERSED} weight={TextWeight.SEMI_BOLD}>
                            Про нас
                        </Text>
                        <CustomLink classNamesProps={cls.link} to={HomePaths.WHY_WE} variant={CustomLinkVariants.HASH}>
                            Наші переваги
                        </CustomLink>
                        <CustomLink classNamesProps={cls.link} to={HomePaths.PROGRAMS}
                                    variant={CustomLinkVariants.HASH}>
                            Учбові програми
                        </CustomLink>
                        <CustomLink classNamesProps={cls.link} to={HomePaths.TEACHERS}
                                    variant={CustomLinkVariants.HASH}>
                            Викладачі
                        </CustomLink>
                        <CustomLink classNamesProps={cls.link} to={HomePaths.TESTIMONIALS}
                                    variant={CustomLinkVariants.HASH}>
                            Відгуки
                        </CustomLink>
                    </div>
                    <div className={cls.links}>
                        <Text tag="h3" color={TextColor.REVERSED} weight={TextWeight.SEMI_BOLD}>
                            Корисні посилання
                        </Text>
                        <CustomLink classNamesProps={cls.link} to={RoutePaths.LOCATIONS}
                                    variant={CustomLinkVariants.TEXT}>
                            Розташування
                        </CustomLink>
                        <CustomLink classNamesProps={cls.link} to={RoutePaths.FAQ} variant={CustomLinkVariants.TEXT}>
                            Відповіді на запитання
                        </CustomLink>
                        <CustomLink classNamesProps={cls.link} to={RoutePaths.CONTACTS}
                                    variant={CustomLinkVariants.TEXT}>
                            Контакти
                        </CustomLink>
                    </div>
                    <div className={cls.socialsContainer}>
                        <Text tag="h3" color={TextColor.REVERSED} weight={TextWeight.SEMI_BOLD}>
                            Приєднуйтесь
                        </Text>
                        <div className={cls.socials}>
                            <a target="_blank" href={Anchors.TG}><TelegramIcon className={cls.social}/></a>
                            <a target="_blank" href={Anchors.WUP}><WhatsUpIcon className={cls.social}/></a>
                            <a target="_blank" href={Anchors.VIBER}><ViberIcon className={cls.social}/></a>
                            <a target="_blank" href={Anchors.INST}><InstIcon className={cls.social}/></a>
                        </div>
                    </div>
                </div>
                <div className={cls.connectSection}>
                    <div className={cls.card}>
                        <Text tag="h3" color={TextColor.REVERSED} weight={TextWeight.SEMI_BOLD}>
                            Подзвонити нам
                        </Text>
                        <Text tag="p" color={TextColor.REVERSED} weight={TextWeight.MEDIUM}>
                            Будні 9:00 – 21:00<br/>
                            Вихідні 10:00 – 18:00
                        </Text>
                        <CustomLink to={Anchors.PHONE} variant={CustomLinkVariants.ANCHOR} classNamesProps={cls.anchor}>
                            +380 (96) 456 24 83
                        </CustomLink>
                        <CustomLink to={Anchors.PHONE} variant={CustomLinkVariants.ANCHOR} classNamesProps={cls.anchor}>
                            +380 (96) 456 24 83
                        </CustomLink>
                    </div>
                    <div className={cls.card}>
                        <Text tag="h3" color={TextColor.REVERSED} weight={TextWeight.SEMI_BOLD}>
                            Замовити дзвінок
                        </Text>
                        <Text tag="p" color={TextColor.REVERSED} weight={TextWeight.MEDIUM}>
                            Ви можете заповнити форму,
                            <br/>і ми самі вам зателефонуємо
                        </Text>
                        <Button classNamesProps={cls.button} type="button" variant={ButtonVariants.ACTION_SECOND}
                                text="Замовити дзвінок" onClick={() => changeModalVisibility(true)}/>
                    </div>
                    <div className={cls.rights}>
                        <Text tag="span" color={TextColor.REVERSED} weight={TextWeight.NORMAL}>
                        Розроблено командою репетиторського центру «Інтенсив» із любов'ю
                        </Text>
                        <Text tag="span" color={TextColor.REVERSED} weight={TextWeight.NORMAL}>
                            Усі права захищені
                        </Text>
                        <Text tag="span" color={TextColor.REVERSED} weight={TextWeight.NORMAL}>
                            {`2023 - ${year}`}
                        </Text>
                    </div>
                </div>
            </nav>
        </footer>
    );
};