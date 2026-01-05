import React from 'react';
import cls from './Branches.module.css';
import { Text, TextColor, TextWeight } from "shared/components";
import branch from "shared/assets/images/branch.png";

export const Branches = () => {
    return (
        <section className={cls.section}>
            <Text tag="h2" weight={TextWeight.EXTRA_BOLD} color={TextColor.MAIN}>
                Адреси філій у м. Дніпро
            </Text>
            <ul className={cls.branches}>
                <li className={cls.branch}>
                    <div className={cls.branchDescription}>
                        <Text tag="h3" weight={TextWeight.EXTRA_BOLD} color={TextColor.MAIN}>
                            Театральна
                        </Text>
                        <Text tag="p" weight={TextWeight.MEDIUM} color={TextColor.MAIN}>
                            <Text tag="span" weight={TextWeight.BOLD} color={TextColor.MAIN}>Адреса: </Text>вул. Театральна, 3 (р-н вул. Робочої), двоповерхова будівля праворуч від податкової, навпроти Державного Дніпровського проектного інституту.
                        </Text>
                        <img src={branch} alt="photo of a building"/>
                    </div>
                    <div className={cls.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84683.45358854705!2d34.967054142871085!3d48.44966170363317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe36dd6417da3%3A0x6fd0878ac72bea90!2sTeatralna%20St%2C%203%2C%20Dnipro%2C%20Dnipropetrovs&#39;ka%20oblast%2C%2049000!5e0!3m2!1sen!2sua!4v1765211319698!5m2!1sen!2sua"
                            width="100%" height="100%" style={{border: 0}} allowFullScreen={false} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </li>
            </ul>
        </section>
    );
};

