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
    { background: '#82f7FF', img: examImg, title: 'Підготовка до НМТ/ЄВІ', programAspects: ["Пояснимо структуру та особливості іспиту", "Навчимо виконувати екзаменаційні завдання", "Опрацюємо типові помилки", "Усунемо прогалини в граматиці", "Підкажемо, як отримати максимум"] },
    { background: '#F44C75', img: pupils, title: 'Школярі', programAspects: ["Знайомимо з граматичними конструкціями англійської мови", "Відпрацьовуємо їх використання в усному та писемному мовленні", "Готуємо до складання НМТ та шкільних іспитів", "Ставимо правильну вимову"] },
    { background: '#CBF86D', img: students, title: 'Студенти', programAspects: ["Пояснюємо складні граматичні конструкції простою мовою", "Розвиваємо навички живого спілкування та ведення діалогів", "Готуємо до ЄВІ та інших іспитів", "Адаптуємо темп і зміст курсу під ваші цілі"] },
    { background: '#FFDB59', img: kids, title: 'Малюки', programAspects: ["Навчаємо через захопливу гру", "Інтегруємо англійську в повсякденне життя", "Всебічно розвиваємо дитину: окрім іноземної мови, діти вчаться рахувати, розрізняти кольори, розвивають дрібну та велику моторику під час ігор"] },
    { background: '#FF5A50', img: speakingClubImg, title: 'Розмовні клуби', programAspects: ["Допомагаємо регулярно практикувати англійську", "Поліпшуємо сприйняття мови на слух", "Долаємо мовний бар’єр", "Розвиваємо навички комунікації з однолітками"] },
    { background: '#FFB0CD', img: adults, title: 'Дорослі', programAspects: ["Навчаємо за комунікативною методикою", "Робимо акцент на розмовній мові", "Допомагаємо говорити й думати англійською", "Підбираємо викладача відповідно до вашого рівня та цілей"] },
]
export const StudyingPrograms = () => {
    return (
        <section id="programs" className={classes.sectionContainer}>
            <div className={classes.titleContainer}>
                <Text tag="h2" classNamesProps={classes.title} variant={TextVariants.TITLE_BOLD}>
                    Обирайте навчальну програму з англійської згідно з вашими потребами
                </Text>
                <Text tag="p" classNamesProps={classes.subtitle} variant={TextVariants.SUBTITLE}>
                    Починати навчання можна з будь-якого рівня. Оберіть програму, що відповідає віку, цілям та формату навчання, який вам зручний. Більш детально про кожну програму можна дізнатися нижче.
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
