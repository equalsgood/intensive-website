import React from 'react';
import cls from "../Testimonials.module.css";
import { Text, TextColor, TextWeight } from "shared/components";

export interface TestimonialProps {
    author: string,
    text: string,
    img: string
}

export const Testimonial = (props: TestimonialProps) => {
    const { author, img, text } = props;
    return (
        <li className={cls.testimonialContainer}>
            <div className={cls.quote}>
                <Text classNamesProps={cls.quoteText} tag="p" color={TextColor.REVERSED}
                      weight={TextWeight.MEDIUM}>{text}</Text>
                <div className={cls.mark}>
                    <div className={cls.outline}/>
                    <div className={cls.inline}/>
                </div>
            </div>
            <div className={cls.author}>
                <img alt={`image of the author ${author}`} src={img} />
                <Text tag="span" weight={TextWeight.BOLD} color={TextColor.REVERSED}>{author}</Text>
            </div>
        </li>
    );
};