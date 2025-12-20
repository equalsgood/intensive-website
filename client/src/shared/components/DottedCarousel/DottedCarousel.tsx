import React, { ReactNode, RefObject, TouchEvent, useEffect, useRef, useState } from 'react';
import cls from './DottedCarousel.module.css';
import classNames from "classnames";

interface DottedCarouselProps {
    carouselItems: Array<ReactNode>;
    singleStep: number; //pixels for each carousel item
    wrapperSizesClass: string;
    containerPropsClass: string;
    adjusted?: boolean;
    reversed: boolean;
}

export const DottedCarousel = (props: DottedCarouselProps) => {
    const { carouselItems, reversed, adjusted, singleStep, wrapperSizesClass, containerPropsClass} = props;
    const firstRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const thirdRef = useRef<HTMLDivElement>(null);

    const [isScrollEnd, setIsScrollEnd] = useState(true)
    const [currentItem, setCurrentItem] = useState(0)
    const [firstOffset, setFirstOffset] = useState(-singleStep * carouselItems.length)
    const [secondOffset, setSecondOffset] = useState(0)
    const [thirdOffset, setThirdOffset] = useState(singleStep * carouselItems.length)
    const [offsetsBeforeScroll, setOffsetsBeforeScroll] = useState({
        first: firstOffset,
        second: secondOffset,
        third: thirdOffset,
    })
    const [startScrollX, setStartScrollX] = useState(0);
    const [totalScrolledPixels, setTotalScrolledPixels] = useState(0);

    useEffect(() => {
        setFirstOffset(-singleStep * carouselItems.length)
        setSecondOffset(0)
        setThirdOffset(singleStep * carouselItems.length)
        setOffsetsBeforeScroll({
            first: -singleStep * carouselItems.length,
            second: 0,
            third: singleStep * carouselItems.length,
        })
        setCurrentItem(0);
        setStartScrollX(0);
        setTotalScrolledPixels(0);
        setIsScrollEnd(true);
    }, [singleStep]);

    const offsetCount = (offset: number, ref: RefObject<HTMLDivElement>) => {
        let newOffset = offset;
        if(Math.abs(offset) > singleStep * (carouselItems.length + 1)) {
            if(offset > 0) {
                newOffset = offset - (singleStep * carouselItems.length * 3);
            }
            else if(offset < 0) {
                newOffset = offset + (singleStep * carouselItems.length * 3);
            }
        }
        if(Math.abs(newOffset) > singleStep * (carouselItems.length)){
            ref.current.style.display = 'none';
        } else {
            ref.current.style.display = 'flex';
        }
        return newOffset;
    }

    const setOffsets = (first: number, second: number, third: number) => {
        let changedFirst = first;
        let changedSecond = second;
        let changedThird = third;
        if(first % singleStep !== 0) {
            const diff = changedFirst % singleStep;
            changedFirst = diff < singleStep / 2 ? first - diff : first + (singleStep - diff);
        }
        if(second % singleStep !== 0) {
            const diff = changedSecond % singleStep;
            changedSecond = diff < singleStep / 2 ? second - diff : second + (singleStep - diff);
        }
        if(third % singleStep !== 0) {
            const diff = changedThird % singleStep;
            changedThird = diff < singleStep / 2 ? third - diff : third + (singleStep - diff);
        }

        setFirstOffset(offsetCount(changedFirst, firstRef));
        setSecondOffset(offsetCount(changedSecond, secondRef));
        setThirdOffset(offsetCount(changedThird, thirdRef));
        setOffsetsBeforeScroll({
            first: offsetCount(changedFirst, firstRef),
            second: offsetCount(changedSecond, secondRef),
            third: offsetCount(changedThird, thirdRef),
        })
    }

    const scrollCarousel = (scrollSize: number, temporary?: boolean, rtrn?: boolean) => {
        const { first, second, third } = offsetsBeforeScroll;
        if(rtrn) {
            setOffsets(first, second, third);
            return;
        }
        if(temporary) {
            setFirstOffset(prevState => prevState - scrollSize);
            setSecondOffset(prevState => prevState - scrollSize);
            setThirdOffset(prevState => prevState - scrollSize);
            return;
        }
        setOffsets(first - scrollSize, second - scrollSize, third - scrollSize);
    }

    const changeCurrentItem = (item: number) => {
        setCurrentItem(prevCurrentItem => {
            const newOffset = (item - prevCurrentItem) * singleStep;
            scrollCarousel(newOffset);
            let newCurrent = item;
            if(item > (carouselItems.length - 1))
                newCurrent = item - carouselItems.length;
            if(item < 0)
                newCurrent = carouselItems.length + item;
            return newCurrent;
        })
    }

    const onScrollStart = (x: number) => {
        setIsScrollEnd(false);
        setStartScrollX(x);
        setOffsetsBeforeScroll({
            first: firstOffset,
            second: secondOffset,
            third: thirdOffset
        })
    }
    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) =>
        onScrollStart(e.screenX);
    const onTouchStart = (e: TouchEvent<HTMLDivElement>) =>
        onScrollStart(e.touches[0].pageX);

    const onScroll = (x: number) => {
        setStartScrollX(prev => {
            const scrolledPixels = prev - x;
            setTotalScrolledPixels(prev => prev + scrolledPixels);
            scrollCarousel(scrolledPixels, true);
            return x;
        })
    }

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!startScrollX)
            return;
        onScroll(e.screenX);
    }
    const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        if(!startScrollX)
            return;
        onScroll(e.touches[0].pageX);
    }

    const onDragEnd = () => {
        setStartScrollX(0);
        const distance = totalScrolledPixels / singleStep / 0.5;
        if(distance < 0.3 && distance > -0.3)
            scrollCarousel(0, false, true);
        else {
            let roundedDistance: number;
            if(distance > 0 && distance < 0.6)
                roundedDistance = 1;
            else if(distance < 0 && distance > -0.6)
                roundedDistance = -1;
            else
                roundedDistance = Math.round(distance);
            changeCurrentItem(currentItem + roundedDistance);
        }
        setTotalScrolledPixels(0);
        setIsScrollEnd(true);
    }

    useEffect(() => {
        if(isScrollEnd) {
            const { first, second, third } = offsetsBeforeScroll;
            setOffsets(first, second, third);
        }
    }, [isScrollEnd]);

    useEffect(() => {
        const interval = setInterval(() => {
            if(!isScrollEnd)
                return;
            changeCurrentItem(currentItem + 1);
        }, 5000);
        return () => {
            clearInterval(interval);
        }
    }, [currentItem, singleStep, offsetsBeforeScroll, changeCurrentItem, scrollCarousel, offsetCount]);

    return (
        <div className={cls.carousel}>
            <div
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseLeave={onDragEnd}
                onMouseUp={onDragEnd}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onDragEnd}
                onTouchCancel={onDragEnd}
                className={classNames(cls.wrapper, wrapperSizesClass, {[cls.dragged]: startScrollX})}
            >
                <div ref={firstRef} style={{left: `${firstOffset}px`}}
                     className={classNames(cls.container, containerPropsClass)}>
                    {[...carouselItems]}
                </div>
                <div ref={secondRef} style={{left: `${secondOffset}px`}}
                     className={classNames(cls.container, containerPropsClass)}>
                    {[...carouselItems]}
                </div>
                <div ref={thirdRef} style={{left: `${thirdOffset}px`}}
                     className={classNames(cls.container, containerPropsClass)}>
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
            <div className={classNames(cls.dots, {[cls.reversed]: reversed})}>
                {carouselItems.map((el, index) =>
                    <div
                        onClick={() => changeCurrentItem(index)}
                        key={`carousel-dot-${index}`}
                        className={classNames(cls.dot, {[cls.selectedDot]: index === currentItem})}
                    />
                )}
            </div>
        </div>
    );
};
