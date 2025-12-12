import React from 'react';
import classes from "../Teachers.module.css";
import { Text, TextColor, TextWeight } from "shared/components";

export interface ISubject {
    title: string,
    bgColor: string,
}

export interface TeacherProps {
    name: string,
    description: string,
    img: string,
    subject: ISubject,
    bg: string,
}

export const Teacher = (props: TeacherProps) => {
    const { name, description, img, subject, bg } = props;

    return (
        <div className={classes.teacher}>
            <div style={{ position: 'relative'}}>
                <div className={classes.imageContainer} style={{background: `${bg}`}}>
                    <img alt={`photo of ${name}`} src={img} className={classes.image}/>
                </div>
                <div style={{background: `${subject.bgColor} `}} className={classes.badge}>
                    <Text tag="span" color={TextColor.MAIN} weight={TextWeight.NORMAL}>{subject.title}</Text>
                </div>
            </div>
            <Text tag="span" weight={TextWeight.EXTRA_BOLD} color={TextColor.MAIN}>{name}</Text>
            <Text tag="p" weight={TextWeight.MEDIUM} color={TextColor.MAIN}>{description}</Text>
        </div>
    );
};