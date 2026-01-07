import React, { useContext, useEffect, useRef, useState } from 'react';
import classes from './HomeIntroduction.module.css';
import { Button, ButtonVariants, Text, TextColor, TextWeight } from "shared/components";
import studentImage1 from 'shared/assets/images/student-1.png';
import studentImage2 from 'shared/assets/images/student-2.png';
import studentImage3 from 'shared/assets/images/student-3.png';
import feature1 from 'shared/assets/images/feature-1.png';
import feature2 from 'shared/assets/images/feature-2.png';
import feature3 from 'shared/assets/images/feature-3.png';
import feature4 from 'shared/assets/images/feature-4.png';
import backgroundVideo from 'shared/assets/videos/background-video-1.mp4';
import classNames from "classnames";
import { SingleFeature } from "sections/home/HomeIntroduction/components/SingleFeature";
import { Context } from "app/providers/ContextProvider";

export const HomeIntroduction = () => {
    const images = [studentImage1, studentImage2, studentImage3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [appear, setAppear] = useState(true);
    const { changeModalVisibility } = useContext(Context);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const changeImageTimeout = useRef<NodeJS.Timeout | null>(null);
    const changeOpacityTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setAppear(false);
            changeImageTimeout.current = setTimeout(() => {
                setCurrentImageIndex(prev => {
                    let newIndex = prev + 1;
                    if(newIndex > (images.length - 1))
                        newIndex = 0;
                    return newIndex;
                })
            }, 2000);
            changeOpacityTimeout.current = setTimeout(() => {
                setAppear(true);
            }, 2500);
        }, 8000);

        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(changeOpacityTimeout.current);
            clearTimeout(changeImageTimeout.current);
        };
    },[]);

    return (
        <section className={classes.intro}>
            <div className={classes.container}>
                <div className={classes.action}>
                    <Text tag='h1' color={TextColor.MAIN} weight={TextWeight.BOLD}>Якісне навчання англійської в місті Дніпро</Text>
                    <Text tag='p' classNamesProps={classes.subtitle} weight={TextWeight.SEMI_BOLD} color={TextColor.MAIN}>Разом із
                        репетиторським центром для дітей та студентів "Інтенсив"</Text>
                    <Button classNamesProps={classes.button} type='button' variant={ButtonVariants.ACTION}
                            text='Спробуйте безкоштовно' onClick={() => changeModalVisibility(true)}></Button>
                </div>
                <div className={classNames(classes.imageContainer, {[classes.appear]: appear})}>
                    <img className={classes.image}
                         src={images[currentImageIndex]} alt="image of a happy student"/>
                </div>
            </div>
            <ul className={classes.features}>
                <SingleFeature img={feature1} boldText='Заняття з викладачем, '
                               plainText='який любить свій предмет та знає, як зацікавити ним дитину'/>
                <SingleFeature img={feature2} boldText='У парах або індивідуально —'
                               plainText='в будь-який зручний для вас час та в будь-якому зручному для вас форматі'/>
                <SingleFeature img={feature3} boldText='Займайтеся з будь-якого міста світу: '
                               plainText='в одній із наших філій або онлайн із викладачем "Інтенсиву"'/>
                <SingleFeature img={feature4} boldText='Персоналізована програма, '
                               plainText='яку ми розробляємо з урахуванням цілей кожного студента'/>
            </ul>
            <video
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline="true"
                disablePictureInPicture
                src={backgroundVideo}
                className={classes.video}
                preload="auto"
            />
        </section>
    );
};

