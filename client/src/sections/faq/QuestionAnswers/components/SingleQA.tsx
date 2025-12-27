import React, { useEffect, useRef, useState } from 'react';
import cls from './SingleQA.module.css';
import classNames from "classnames";
import { Text, TextColor, TextWeight } from "shared/components";
import ChevronRight from "shared/assets/icons/chevron-right.svg";

export interface SingleQAProps {
    qw: string;
    an: string;
    isMobile?: boolean;
}

export const SingleQA = ({ qw, an, isMobile }: SingleQAProps) => {
    const container = useRef<HTMLDivElement>(null);
    const qwContainer = useRef<HTMLDivElement>(null);
    const [opened, setOpened] = useState(false);
    const [maxHeight, setMaxHeight] = useState(isMobile ? 80 : 100);

    const openHandler = () => {
        const closedHeight = qwContainer.current.clientHeight;
        const openedHeight = container.current.scrollHeight;
        setOpened(prev => {
            if(prev)
                setMaxHeight(closedHeight);
            else
                setMaxHeight(openedHeight);
            return !prev;
        })
    }

    useEffect(() => {
        const closedHeight = qwContainer.current.clientHeight;
        const openedHeight = container.current.scrollHeight;
        if(!opened)
            setMaxHeight(closedHeight);
        else
            setMaxHeight(openedHeight);
    }, [isMobile]);

    return (
        <div
            ref={container}
            className={classNames(cls.container, {[cls.opened]: opened})}
            onClick={() => openHandler()}
            style={{maxHeight: maxHeight}}
        >
            <div ref={qwContainer} className={cls.questionContainer}>
                <Text tag="h4" color={TextColor.MAIN} weight={TextWeight.BOLD}>{qw}</Text>
                <ChevronRight/>
            </div>
            <Text tag="p" color={TextColor.MAIN} weight={TextWeight.MEDIUM}>{an}</Text>
        </div>
    );
};