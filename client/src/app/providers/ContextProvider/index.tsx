import { createContext, ReactNode, useState } from "react";

export interface ContextSchema {
    isModalVisible: boolean;
    changeModalVisibility: (value: boolean) => void;
    isSubmitted: boolean;
    changeSubmittedStatus: (value: boolean) => void;
    mobileBreakpoint: number,
    isMobile: boolean,
    tabletBreakpoint: number,
    isTablet: boolean,
    screenWidth: number,
    widthWithoutScroll: number,
    onResize: (width: number, widthWithoutScroll: number) => void;
}

const defaultValue: ContextSchema = {
    isModalVisible: false,
    changeModalVisibility: (value) => {},
    isSubmitted: false,
    changeSubmittedStatus: (value) => {},
    isMobile: false,
    isTablet: false,
    mobileBreakpoint: 640,
    tabletBreakpoint: 960,
    screenWidth: window.innerWidth,
    onResize: (width) => {},
    widthWithoutScroll: window.innerWidth,
}

export const Context = createContext(defaultValue);

interface ContextProviderProps {
    children: ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const mobileBreakpoint = 640;
    const tabletBreakpoint = 960;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [widthWithoutScroll, setWidthWithoutScroll] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const changeModalVisibility = (value: boolean) => {
        setIsModalVisible(value);
    };

    const changeSubmittedStatus = (value: boolean) => {
        setIsSubmitted(value);
    };

    const resizeHandler = (width: number, widthWithoutScroll: number) => {
        if(width < mobileBreakpoint) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        if(width < tabletBreakpoint) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
        setScreenWidth(width);
        setWidthWithoutScroll(widthWithoutScroll);
    };

    const contextValue: ContextSchema = {
        isModalVisible,
        changeModalVisibility,
        isSubmitted,
        changeSubmittedStatus,
        mobileBreakpoint,
        isMobile,
        screenWidth,
        onResize: resizeHandler,
        tabletBreakpoint,
        isTablet, widthWithoutScroll
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}