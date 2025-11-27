import React, { RefObject, useRef, useState } from 'react';
import classes from './Teachers.module.css';
import { Button, ButtonVariants, Text, TextColor, TextWeight } from "shared/components";
import classNames from "classnames";
import { ISubject, Teacher, TeacherProps } from "./components/Teacher";
import teacher1 from 'shared/assets/images/teachers/teacher1.png';
import teacher2 from 'shared/assets/images/teachers/teacher2.png';
import teacher3 from 'shared/assets/images/teachers/teacher3.png';
import teacher4 from 'shared/assets/images/teachers/teacher4.png';
import teacher5 from 'shared/assets/images/teachers/teacher5.png';
import ArrowIcon from 'shared/assets/icons/arrow.svg';

const englishSubject: ISubject = { title: 'Англійська мова', bgColor: '#D6FBBD'};
const teachersConfig: Array<TeacherProps> = [
    { name: 'Артем Бабак', img: teacher1, subject: englishSubject, description: 'Керівник філії на Театральній, розробник матеріалів з методики викладання англійської мови, автор навчально-методичних посібників', bg: '#ffe074' },
    { name: 'Юлія Коновалова', img: teacher3, subject: englishSubject, description: 'Заступник керівника філії на Театральній, сертифікований експерт із підготовки до міжнародних іспитів', bg: '#ffe074' },
    { name: 'Ідоґа Чісом', img: teacher5, subject: englishSubject, description: 'Керівник розмовних клубів з англійської мови з досвідом понад 4 роки', bg: '#ffe074' },
    { name: 'Олена Макаренко', img: teacher2, subject: englishSubject, description: 'Фахівець з адаптивного навчання англійській мові, методист зі створення інтерактивних навчальних матеріалів', bg: '#ffe074' },
    { name: "Уляна Воробйова", img: teacher4, subject: englishSubject, description: 'Переможець Всеукраїнскьх олімпіад з англійської мови, експерт НМТ', bg: '#ffe074' },
]

export const Teachers = () => {
    const singleStep = 258;
    const [firstOffset, setFirstOffset] = useState(-singleStep * teachersConfig.length)
    const [secondOffset, setSecondOffset] = useState(0)
    const [thirdOffset, setThirdOffset] = useState(singleStep * teachersConfig.length)

    const firstRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const thirdRef = useRef<HTMLDivElement>(null);

    const offsetCount = (prevState: number, isNext: boolean, ref: RefObject<HTMLDivElement>) => {
        let newOffset = isNext ? prevState - singleStep : prevState + singleStep;
        if(Math.abs(newOffset) > singleStep * (teachersConfig.length + 1)) {
            if(newOffset > 0) {
                newOffset = newOffset - (singleStep * teachersConfig.length * 3);
            }
            else if(newOffset < 0) {
                newOffset = newOffset + (singleStep * teachersConfig.length * 3);
            }
        }
        if(Math.abs(newOffset) > singleStep * (teachersConfig.length)){
            ref.current.style.display = 'none';
        } else {
            ref.current.style.display = 'flex';
        }
        return newOffset;
    }

    const next = () => {
        setFirstOffset(prevState => {
            return offsetCount(prevState, true, firstRef);
        });
        setSecondOffset(prevState => {
            return offsetCount(prevState, true, secondRef);
        });
        setThirdOffset(prevState => {
            return offsetCount(prevState, true, thirdRef);
        });
    }

    const prev = () => {
        setFirstOffset(prevState => {
            return offsetCount(prevState, false, firstRef);
        });
        setSecondOffset(prevState => {
            return offsetCount(prevState, false, secondRef);
        });
        setThirdOffset(prevState => {
            return offsetCount(prevState, false, thirdRef);
        });
    }

    return (
        <section className={classes.section}>
            <div className={classes.titleContainer}>
                <div className={classes.switches}>
                    <Button icon={<ArrowIcon/>} onClick={prev} type="button" variant={ButtonVariants.SWITCH} classNamesProps={classes.switch} />
                    <Button icon={<ArrowIcon/>} onClick={next} type="button" variant={ButtonVariants.SWITCH} classNamesProps={classNames(classes.switch, classes.right)} />
                </div>
                <div className={classes.labelContainer}>
                    <div className={classNames(classes.labelWrapper, classes.purple)}>
                        <Text classNamesProps={classes.labelText} tag="span" color={TextColor.SECOND}
                              weight={TextWeight.EXTRA_BOLD}>наші</Text>
                    </div>
                    <div className={classNames(classes.labelWrapper, classes.yellow)}>
                        <Text classNamesProps={classes.labelText} tag="span" color={TextColor.MAIN}
                              weight={TextWeight.EXTRA_BOLD}>викладачі</Text>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.textContainer}>
                    <Text tag="h2" color={TextColor.MAIN} weight={TextWeight.EXTRA_BOLD}>ЗНАЄМО,<br/>ЯК НАВЧАТИ</Text>
                    <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM}>Наші викладачі розкажуть, як
                        підготуватися до іспитів, допоможуть упоратися зі складним завданням і перемогти на
                        олімпіаді</Text>
                    <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM}>Пояснять про підводні камені іспитів та найпоширеніші помилки, а також розкажуть, як їх уникнути.</Text>
                </div>
                <div className={classes.teachersWrapper}>
                    <div ref={firstRef} style={{left: `${firstOffset}px`}} className={classes.teachersContainer}>
                        {teachersConfig.map(({name, description, img, subject, bg}, index) =>
                            <Teacher key={`${name}-${index}`} bg={bg} name={name} img={img} subject={subject}
                                     description={description}/>
                        )}
                    </div>
                    <div ref={secondRef} style={{left: `${secondOffset}px`}} className={classes.teachersContainer}>
                        {teachersConfig.map(({name, description, img, subject, bg}, index) =>
                            <Teacher key={`${name}-${index}`} bg={bg} name={name} img={img} subject={subject}
                                     description={description}/>
                        )}
                    </div>
                    <div ref={thirdRef} style={{left: `${thirdOffset}px`}} className={classes.teachersContainer}>
                        {teachersConfig.map(({name, description, img, subject, bg}, index) =>
                            <Teacher key={`${name}-${index}`} bg={bg} name={name} img={img} subject={subject}
                                     description={description}/>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teachers;