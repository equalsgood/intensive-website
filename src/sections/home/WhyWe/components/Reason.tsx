import React from 'react';
import classes from '../WhyWe.module.css';
import { Text, TextColor, TextWeight } from "shared/components";
import { ReasonDetail, ReasonDetailProps } from "sections/home/WhyWe/components/ReasonDetail";

export interface ReasonProps {
    label: string,
    details: Array<ReasonDetailProps>,
}

export const Reason = (props: ReasonProps) => {
    const { label, details } = props;

    return (
        <div className={classes.reason}>
            <label className={classes.label}>
                <Text tag="span" weight={TextWeight.SEMI_BOLD} color={TextColor.MAIN}>{label}</Text>
            </label>
            { details.map(({title, paragraph}, index) =>
                <>
                    <ReasonDetail key={title} title={title} paragraph={paragraph}/>
                    {index + 1 !== details.length &&
                        <hr/>
                    }
                </>
            )}
        </div>
    );
};