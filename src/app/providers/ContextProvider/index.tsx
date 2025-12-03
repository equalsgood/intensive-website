import { createContext, ReactNode, useState } from "react";

export interface ContextSchema {
    isMobile: boolean;
}

const defaultValue: ContextSchema = {
    isMobile: false,
}

export const Context = createContext(defaultValue);

interface ContextProviderProps {
    children: ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [isMobile, setIsMobile] = useState(false);


    const contextValue: ContextSchema = {
        isMobile,
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}