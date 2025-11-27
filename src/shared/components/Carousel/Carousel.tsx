import React, { ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import cls from './Carousel.module.css';
import classNames from "classnames";

interface CarouselProps {
    carouselItems: Array<ReactNode>;
    singleStep: number; //pixels for each carousel item
    wrapperSizesClass: string;
    containerPropsClass: string;
    nextClicked: number;
    prevClicked: number;
}

export const Carousel = (props: CarouselProps) => {
    const { carouselItems, singleStep, wrapperSizesClass, containerPropsClass, prevClicked, nextClicked } = props;

    const [firstOffset, setFirstOffset] = useState(-singleStep * carouselItems.length)
    const [secondOffset, setSecondOffset] = useState(0)
    const [thirdOffset, setThirdOffset] = useState(singleStep * carouselItems.length)

    const firstRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const thirdRef = useRef<HTMLDivElement>(null);

    const offsetCount = (prevState: number, isNext: boolean, ref: RefObject<HTMLDivElement>) => {
        let newOffset = isNext ? prevState - singleStep : prevState + singleStep;
        if(Math.abs(newOffset) > singleStep * (carouselItems.length + 1)) {
            if(newOffset > 0) {
                newOffset = newOffset - (singleStep * carouselItems.length * 3);
            }
            else if(newOffset < 0) {
                newOffset = newOffset + (singleStep * carouselItems.length * 3);
            }
        }
        if(Math.abs(newOffset) > singleStep * (carouselItems.length)){
            ref.current.style.display = 'none';
        } else {
            ref.current.style.display = 'flex';
        }
        return newOffset;
    }

    const next = () => {
        setFirstOffset(prevState => {
            return offsetCount(prevState, true, firstRef);
        });
        setSecondOffset(prevState => {
            return offsetCount(prevState, true, secondRef);
        });
        setThirdOffset(prevState => {
            return offsetCount(prevState, true, thirdRef);
        });
    }

    const prev = () => {
        setFirstOffset(prevState => {
            return offsetCount(prevState, false, firstRef);
        });
        setSecondOffset(prevState => {
            return offsetCount(prevState, false, secondRef);
        });
        setThirdOffset(prevState => {
            return offsetCount(prevState, false, thirdRef);
        });
    }

    useEffect(() => {
        if(nextClicked !== 0)
            next();
    }, [nextClicked]);
    useEffect(() => {
        if(prevClicked !== 0)
            prev();
    }, [prevClicked]);

    return (
        <div className={classNames(cls.wrapper, wrapperSizesClass)}>
            <div ref={firstRef} style={{left: `${firstOffset}px`}} className={classNames(cls.container, containerPropsClass)}>
                {[...carouselItems]}
            </div>
            <div ref={secondRef} style={{left: `${secondOffset}px`}} className={classNames(cls.container, containerPropsClass)}>
                {[...carouselItems]}
            </div>
            <div ref={thirdRef} style={{left: `${thirdOffset}px`}} className={classNames(cls.container, containerPropsClass)}>
                {[...carouselItems]}
            </div>
        </div>
    );
};
