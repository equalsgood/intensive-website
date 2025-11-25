import React, { ReactNode } from 'react';
import classNames from "classnames";
import cls from './Text.module.css';

export enum TextVariants {
    TITLE = 'title',
    SUBTITLE = 'subtitle',
    PARAGRAPH_BOLD = 'paragraphBold',
    PARAGRAPH = 'paragraph',
}

type TextTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';

interface TextProps {
    tag: TextTags;
    variant: TextVariants;
    children: ReactNode;
    width?: number;
    classNamesProps?: string;
}
export const Text = (props: TextProps) => {
    const { tag, children, variant, classNamesProps, width } = props;
    const classes = classNames(cls.text, cls[variant], classNamesProps);

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