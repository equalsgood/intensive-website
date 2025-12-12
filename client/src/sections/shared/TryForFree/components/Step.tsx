import React from 'react';
import { Text, TextColor, TextWeight } from "shared/components";
import cls from '../TryForFree.module.css';

export interface StepProps {
    img: string,
    text: string
}

export const Step = ({text, img}: StepProps) => {
    return (
        <li className={cls.step}>
            <div className={cls.imageContainer}>
                <img src={img} alt={`image of a step ${text}`}/>
            </div>
            <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM}>{text}</Text>
        </li>
    );
};

