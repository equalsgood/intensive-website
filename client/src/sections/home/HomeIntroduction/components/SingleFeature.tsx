import React, { ReactNode } from 'react';
import classes from '../HomeIntroduction.module.css';
import { Text, TextVariants } from "shared/components";

interface SingleFeatureProps {
    img: string,
    boldText: string,
    plainText: string
}

export const SingleFeature = ({ img, boldText, plainText }: SingleFeatureProps) => {
    return (
        <li className={classes.singleFeature}>
            <div className={classes.featureImageContainer}>
                <img src={img} alt='image of a feature' className={classes.featureImage}/>
            </div>
            <Text classNamesProps={classes.featureParagraph} tag='p' variant={TextVariants.PARAGRAPH}>
                <Text tag='span' variant={TextVariants.PARAGRAPH_BOLD}>{boldText}</Text>
                {plainText}
            </Text>
        </li>
    );
};