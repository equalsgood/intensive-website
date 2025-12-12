import { createContext, ReactNode, useState } from "react";

export interface ContextSchema {
    isModalVisible: boolean;
    changeModalVisibility: (value: boolean) => void;
    isSubmitted: boolean;
    changeSubmittedStatus: (value: boolean) => void;
}

const defaultValue: ContextSchema = {
    isModalVisible: false,
    changeModalVisibility: (value) => {},
    isSubmitted: false,
    changeSubmittedStatus: (value) => {},
}

export const Context = createContext(defaultValue);

interface ContextProviderProps {
    children: ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const changeModalVisibility = (value: boolean) => {
        setIsModalVisible(value);
    };

    const changeSubmittedStatus = (value: boolean) => {
        setIsSubmitted(value);
    };

    const contextValue: ContextSchema = {
        isModalVisible,
        changeModalVisibility,
        isSubmitted,
        changeSubmittedStatus
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}