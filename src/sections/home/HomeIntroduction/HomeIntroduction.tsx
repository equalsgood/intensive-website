import React, { useEffect, useState } from 'react';
import classes from './HomeIntroduction.module.css';
import { Button, ButtonVariants, Text, TextVariants } from "shared/components";
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

export const HomeIntroduction = () => {
    const images = [studentImage1, studentImage2, studentImage3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [appear, setAppear] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setAppear(false);
            setTimeout(() => {
                setCurrentImageIndex(prev => {
                    let newIndex = prev + 1;
                    if(newIndex > (images.length - 1))
                        newIndex = 0;
                    return newIndex;
                })
                setAppear(true);
            }, 2500);
        }, 8000);

        return () => clearInterval(interval);
    },[]);

    return (
        <section className={classes.intro}>
            <div className={classes.container}>
                <div className={classes.action}>
                    <Text tag='h1' variant={TextVariants.TITLE}>Якісне навчання з великою посмішкою</Text>
                    <Text tag='p' classNamesProps={classes.subtitle} variant={TextVariants.SUBTITLE}>Разом з
                        репетиторським центром для дітей та студентів "Інтенсив"</Text>
                    <Button classNamesProps={classes.button} type='button' variant={ButtonVariants.ACTION}
                            text='Спробувати безкоштовно'></Button>
                </div>
                <div className={classes.imageContainer}>
                    <img className={classNames(classes.image, {[classes.appear]: appear})}
                         src={images[currentImageIndex]} alt="image of a happy student"/>
                </div>
            </div>
            <ul className={classes.features}>
                <SingleFeature img={feature1} boldText='Заняття з викладачем, '
                               plainText='який полюбляє свій предмет та знає, як зацікавити їм дитину'/>
                <SingleFeature img={feature2} boldText='У парах або індивідуально '
                               plainText='у будь який зручний для Вас час'/>
                <SingleFeature img={feature3} boldText='Займайтесь з будь якого міста у світі: '
                               plainText='в одному з наших філіалів, або онлайн з викладачем Інтенсиву'/>
                <SingleFeature img={feature4} boldText='Програма для всіх, '
                               plainText='яку ми розробляємо індивідуально під кожну дитину'/>
            </ul>
            <video autoPlay loop muted src={backgroundVideo} className={classes.video}/>
        </section>
    );
};

