import React, { useContext } from 'react';
import cls from './ContactsSection.module.css';
import { Text, TextColor, TextWeight } from "shared/components";
import admin from "shared/assets/images/contacts-admin.png";
import classNames from "classnames";
import TelegramIcon from "shared/assets/icons/social/tg.svg";
import WhatsUpIcon from "shared/assets/icons/social/wup.svg";
import ViberIcon from "shared/assets/icons/social/viber.svg";
import InstIcon from "shared/assets/icons/social/inst.svg";
import { Context } from "app/providers/ContextProvider";
import { Anchors } from "app/providers/AppRouter";

export const ContactsSection = () => {
    const { screenWidth } = useContext(Context);

    return (
        <section className={cls.section}>
            <div className={cls.container}>
                <Text tag="h1" weight={TextWeight.EXTRA_BOLD} color={TextColor.MAIN}>
                    Контакти репетиторського центру «Інтенсив»
                </Text>
                <div className={cls.contacts}>
                    <img src={admin} alt="image related to contacts"/>
                    <div className={classNames(cls.contact, cls.address)}>
                        <Text tag="h2" color={TextColor.MAIN} weight={TextWeight.EXTRA_BOLD}
                              classNamesProps={cls.subtitle}>
                            Адреса
                        </Text>
                        <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM} classNamesProps={cls.infoPiece}>
                            49000, Дніпро, вул. Театральна, буд. 3, каб. 1
                        </Text>
                        <a className={cls.link} target="_blank" href={Anchors.MAP.link}>{Anchors.MAP.name}</a>
                    </div>
                    <div className={classNames(cls.contact, cls.companyInfo)}>
                        <Text tag="h2" color={TextColor.MAIN} weight={TextWeight.EXTRA_BOLD}
                              classNamesProps={cls.subtitle}>
                            Юридична інформація
                        </Text>
                        <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM} classNamesProps={cls.infoPiece}>
                            ФІЗІЧНА ОСОБА-ПІДПРИЄМЕЦЬ БАБАК АРТЕМ ВОЛОДИМИРОВИЧ
                        </Text>
                        {screenWidth >= 400
                            ? <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM} classNamesProps={cls.infoPiece}>
                                Рахунок №<br/>UA243077700000026009711158064
                            </Text>
                            : <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM} classNamesProps={cls.infoPiece}>
                                Рахунок №<br/>UA243077700000026<br/>009711158064
                            </Text>
                        }
                        <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM} classNamesProps={cls.infoPiece}>
                            ЄДРПОУ <br/>3676710975
                        </Text>
                        <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM} classNamesProps={cls.infoPiece}>
                            Акціонерне товаривство <br/>«Акцент-Банк»
                        </Text>
                        <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM} classNamesProps={cls.infoPiece}>
                            КОД ЄДРПОУ 14360080, МФО 307770
                        </Text>
                    </div>
                    <div className={classNames(cls.contact, cls.phones)}>
                        <Text tag="h2" color={TextColor.MAIN} weight={TextWeight.EXTRA_BOLD}
                              classNamesProps={cls.subtitle}>
                            Телефони
                        </Text>
                        <a className={cls.link} target="_blank" href={Anchors.PHONE.link}>{Anchors.PHONE.name}</a>
                        <a className={cls.link} target="_blank" href={Anchors.SECOND_PHONE.link}>{Anchors.SECOND_PHONE.name}</a>
                    </div>
                    <div className={classNames(cls.contact, cls.socialsContainer)}>
                        <Text tag="h2" color={TextColor.MAIN} weight={TextWeight.EXTRA_BOLD}
                              classNamesProps={cls.subtitle}>
                            Месенжери та соціальні мережі
                        </Text>
                        <div className={cls.socials}>
                            <a target="_blank" href={Anchors.TG.link}><TelegramIcon className={cls.social}/></a>
                            <a target="_blank" href={Anchors.WUP.link}><WhatsUpIcon className={cls.social}/></a>
                            <a target="_blank" href={Anchors.VIBER.link}><ViberIcon className={cls.social}/></a>
                            <a target="_blank" href={Anchors.INST.link}><InstIcon className={cls.social}/></a>
                        </div>
                    </div>
                    <div className={classNames(cls.contact, cls.mailsContainer)}>
                        <Text tag="h2" color={TextColor.MAIN} weight={TextWeight.EXTRA_BOLD}
                              classNamesProps={cls.subtitle}>
                            Пошта
                        </Text>
                        <div className={cls.mails}>
                            <div className={cls.mail}>
                                <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM}
                                      classNamesProps={cls.infoPiece}>
                                    Зв'язок з нами
                                </Text>
                                <a className={cls.link} target="_blank"
                                   href={Anchors.INFO_MAIL.link}>{Anchors.INFO_MAIL.name}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.mapWrapper}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84683.45358854705!2d34.967054142871085!3d48.44966170363317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe36dd6417da3%3A0x6fd0878ac72bea90!2sTeatralna%20St%2C%203%2C%20Dnipro%2C%20Dnipropetrovs&#39;ka%20oblast%2C%2049000!5e0!3m2!1sen!2sua!4v1765211319698!5m2!1sen!2sua"
                        width="100%" height="100%" style={{border: 0}} allowFullScreen={false} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    );
};

