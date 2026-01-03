import { useState } from "react";

export const useRequest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const request = async (callback: () => any) => {
        setIsLoading(true);
        const res = await callback();
        setIsLoading(false);
        if(res?.status !== 200) {
            setIsError(true);
            return false;
        }
        return true;
    }

    return { isError, isLoading, request, setIsLoading, setIsError };
}