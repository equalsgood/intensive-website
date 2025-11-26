import React, { ReactNode } from 'react';
import classNames from "classnames";
import cls from './Text.module.css';

export enum TextVariants {
    TITLE = 'title',
    TITLE_BOLD = 'titleBold',
    TITLE_BOLD_REVERSED = 'titleBoldReversed',
    TITLE_SMALL = 'titleSmall',
    SUBTITLE = 'subtitle',
    PARAGRAPH_BOLD = 'paragraphBold',
    PARAGRAPH = 'paragraph',
    TEXT = 'text',
    MAIN_HEAVY = 'mainHeavy',
    MAIN_EXTRA_BOLD = 'mainExtraBold',
    MAIN_BOLD = 'mainBold',
    MAIN_SEMI_BOLD = 'mainSemiBold',
    MAIN_MEDIUM = 'mainMedium',
    MAIN_NORMAL = 'mainNormal',
    MAIN_LIGHT = 'mainLight',
}

type TextTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';

export enum TextColor {
    MAIN = 'main',
    SECOND = 'second',
    REVERSED = 'reversed'
}

export enum TextWeight {
    HEAVY = 'heavy',
    EXTRA_BOLD = 'extraBold',
    BOLD = 'bold',
    SEMI_BOLD = 'semiBold',
    MEDIUM = 'medium',
    NORMAL = 'normal',
    LIGHT = 'light',
}

interface TextProps {
    tag: TextTags;
    color?: TextColor;
    weight?: TextWeight;
    variant?: TextVariants;
    children: ReactNode;
    width?: number;
    classNamesProps?: string;
}
export const Text = (props: TextProps) => {
    const { tag, color, weight, children, variant, classNamesProps, width } = props;
    const classes = classNames(cls?.[variant], cls?.[color], cls?.[weight], classNamesProps);

    if(tag === 'h1')
        return <h1 className={classes}>{children}</h1>
    if(tag === 'h2')
        return <h2 className={classes}>{children}</h2>
    if(tag === 'h3')
        return <h3 className={classes}>{children}</h3>
    if(tag === 'h4')
        return <h4 className={classes}>{children}</h4>
    if(tag === 'h5')
        return <h5 className={classes}>{children}</h5>
    if(tag === 'h6')
        return <h6 className={classes}>{children}</h6>
    if(tag === 'span')
        return <span className={classes}>{children}</span>

    return <p className={classes}>{children}</p>
};