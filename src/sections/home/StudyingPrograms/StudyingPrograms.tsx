import React from 'react';
import classes from './StudyingPrograms.module.css';
import { Text, TextVariants } from "shared/components";
import speakingClubImg from 'shared/assets/images/student-groups/speaking-club.png';
import examImg from 'shared/assets/images/student-groups/exam-preparing.png';
import pupils from 'shared/assets/images/student-groups/pupils.png';
import students from 'shared/assets/images/student-groups/students.png';
import kids from 'shared/assets/images/student-groups/kids.png';
import adults from 'shared/assets/images/student-groups/adults.png';
import { Program, ProgramData } from "sections/home/StudyingPrograms/components/Program";

const programsConfig: Array<ProgramData> = [
    { background: '#82f7FF', img: examImg, title: 'Підготовка до НМТ/ЄВІ', programAspects: ['Пояснимо, як проходить іспит', 'Навчимо виконувати екзаменаційні завдання', 'Відпрацюємо часті помилки', 'Відновимо прогалини в граматиці', 'Розкажемо, за рахунок чого можна підвищити бал'] },
    { background: '#F44C75', img: pupils, title: 'Школярі', programAspects: ['Знайомимо з граматичними конструкціями англійської мови', 'Відпрацьовуємо їх використання в усному та писемному мовленні', 'Готуємо до ДПА та НМТ', 'Ставимо правильну вимову', 'Вивчаємо англійську через захоплюючі теми'] },
    { background: '#CBF86D', img: students, title: 'Студенти', programAspects: ['Пояснюємо складні конструкції', 'Розвиваємо навички живого спілкування та ведення діалогів', 'Готуємо до міжнародних іспитів та ЄВІ', 'Адаптуємо темп і наповнення курсу під цілі студента — навчання, робота, подорожі, стажування'] },
    { background: '#FFDB59', img: kids, title: 'Малюки', programAspects: ['Навчаємо через захоплюючу гру', 'Інтегруємо англійську у повсякденне життя', 'Всебічно розвиваємо дитину: крім іноземної мови, діти вивчають рахунок, кольори, розвивають дрібну та велику моторику під час ігор'] },
    { background: '#FF5A50', img: speakingClubImg, title: 'Розмовні клуби', programAspects: ['Допомагаємо регулярно практикувати англійську', 'Поліпшуємо сприйняття мови', 'Долаємо мовний бар\'єр', 'Розвиваємо навичку комунікації з однолітками', 'Запрошуємо викладачів з усього світу'] },
    { background: '#FFB0CD', img: adults, title: 'Дорослі', programAspects: ['Навчаємо за комунікативною методикою', 'Робимо акцент на розмовну мову', 'Допомагаємо говорити й думати англійською', 'Підбираємо викладача під ваш рівень та цілі'] },
]
export const StudyingPrograms = () => {
    return (
        <section id="programs" className={classes.sectionContainer}>
            <div className={classes.titleContainer}>
                <Text tag="h2" classNamesProps={classes.title} variant={TextVariants.TITLE_BOLD}>
                    Обирайте учбову програму з англійської згідно Ваших потреб
                </Text>
                <Text tag="p" classNamesProps={classes.subtitle} variant={TextVariants.SUBTITLE}>
                    Починати навчання можна з будь-якого рівня. Оберіть програму, що відповідає віку, цілям і формату навчання, який вам зручний. Більш детально про кожну програму можна дізнатись нижче.
                </Text>
            </div>
            <ul className={classes.features}>
                { programsConfig.map(program =>
                    <Program program={program} key={program.title} />
                )}
            </ul>

        </section>
    );
};
