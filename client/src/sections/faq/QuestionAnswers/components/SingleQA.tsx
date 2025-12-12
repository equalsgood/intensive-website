import React, { useState } from 'react';
import cls from './SingleQA.module.css';
import classNames from "classnames";
import { Text, TextColor, TextWeight } from "shared/components";
import ChevronRight from "shared/assets/icons/chevron-right.svg";

export interface SingleQAProps {
    qw: string;
    an: string;
}

export const SingleQA = ({ qw, an }: SingleQAProps) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className={classNames(cls.container, {[cls.opened]: opened})} onClick={() => setOpened(prev => !prev)}>
            <div className={cls.questionContainer}>
                <Text tag="h4" color={TextColor.MAIN} weight={TextWeight.BOLD}>{qw}</Text>
                <ChevronRight/>
            </div>
            <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM}>{an}</Text>
        </div>
    );
};