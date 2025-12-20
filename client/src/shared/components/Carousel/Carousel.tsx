import React, { ReactNode, RefObject, TouchEvent, useEffect, useRef, useState } from 'react';
import cls from './Carousel.module.css';
import classNames from "classnames";

interface CarouselProps {
    carouselItems: Array<ReactNode>;
    singleStep: number; //pixels for each carousel item
    wrapperSizesClass: string;
    containerPropsClass: string;
    nextClicked: number;
    prevClicked: number;
    id?: string;
    adjusted?: boolean;
}

export const Carousel = (props: CarouselProps) => {
    const { carouselItems, id, adjusted, singleStep, wrapperSizesClass, containerPropsClass, prevClicked, nextClicked } = props;

    const [firstOffset, setFirstOffset] = useState(-singleStep * carouselItems.length)
    const [secondOffset, setSecondOffset] = useState(0)
    const [thirdOffset, setThirdOffset] = useState(singleStep * carouselItems.length)

    const firstRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const thirdRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setFirstOffset(-singleStep * carouselItems.length)
        setSecondOffset(0)
        setThirdOffset(singleStep * carouselItems.length)
    }, [singleStep]);
    const offsetCount = (prevState: number, isNext: boolean, ref: RefObject<HTMLDivElement>, step: number) => {
        let newOffset = isNext ? prevState - step : prevState + step;
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
            return offsetCount(prevState, true, firstRef, singleStep);
        });
        setSecondOffset(prevState => {
            return offsetCount(prevState, true, secondRef, singleStep);
        });
        setThirdOffset(prevState => {
            return offsetCount(prevState, true, thirdRef, singleStep);
        });
    }

    const prev = () => {
        setFirstOffset(prevState => {
            return offsetCount(prevState, false, firstRef, singleStep);
        });
        setSecondOffset(prevState => {
            return offsetCount(prevState, false, secondRef, singleStep);
        });
        setThirdOffset(prevState => {
            return offsetCount(prevState, false, thirdRef, singleStep);
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

    const [mouseDownCord, setMouseDownCord] = useState(0);

    const onDragStart = (pixels: number) => {
        setMouseDownCord(pixels);
    }
    const onDrag = (currentPixels: number) => {
        setMouseDownCord(prevCord => {
            const diff = prevCord - currentPixels;
            if(diff === 0)
                return currentPixels;
            setFirstOffset(prev => offsetCount(prev, diff > 0, firstRef, Math.abs(diff)));
            setSecondOffset(prev => offsetCount(prev, diff > 0, secondRef, Math.abs(diff)));
            setThirdOffset(prev => offsetCount(prev, diff > 0, thirdRef, Math.abs(diff)));

            return currentPixels;
        });
    }

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        onDragStart(e.screenX);
    }
    const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        onDragStart(e.touches[0].pageX);
    }

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!mouseDownCord)
            return;
        onDrag(e.screenX);
    }
    const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        onDrag(e.touches[0].pageX);
    }

    const onDragEnd = () => {
        setMouseDownCord(0);
    }

    return (
        <div
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseLeave={onDragEnd}
            onMouseUp={onDragEnd}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onDragEnd}
            onTouchCancel={onDragEnd}
            className={classNames(cls.wrapper, wrapperSizesClass, {[cls.dragged]: mouseDownCord !== 0})}
        >
            <div id={id} ref={firstRef} style={{left: `${firstOffset}px`}} className={classNames(cls.container, containerPropsClass)}>
                {[...carouselItems]}
            </div>
            <div ref={secondRef} style={{left: `${secondOffset}px`}} className={classNames(cls.container, containerPropsClass)}>
                {[...carouselItems]}
            </div>
            <div ref={thirdRef} style={{left: `${thirdOffset}px`}} className={classNames(cls.container, containerPropsClass)}>
                {[...carouselItems]}
            </div>
            {adjusted &&
                <div
                    style={{opacity: 0, position: 'relative', pointerEvents: 'none', visibility: 'hidden'}}
                    className={classNames(cls.container, containerPropsClass)}
                >
                    {[...carouselItems]}
                </div>
            }
        </div>
    );
};
