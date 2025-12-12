import React from 'react';
import { Text, TextColor, TextVariants, TextWeight } from "shared/components";
import classes from '../WhyWe.module.css';

export interface ReasonDetailProps {
    title: string,
    paragraph: string,
}

export const ReasonDetail = ({title, paragraph}: ReasonDetailProps) => {
    return (
        <div className={classes.detail}>
            <Text tag="h4" color={TextColor.REVERSED} weight={TextWeight.SEMI_BOLD}>{title}</Text>
            <Text tag="p" color={TextColor.REVERSED} weight={TextWeight.MEDIUM}>{paragraph}</Text>
        </div>
    );
};

export default ReasonDetail;