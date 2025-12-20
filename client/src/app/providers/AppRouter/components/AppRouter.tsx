import React, { Suspense, useContext, useEffect } from 'react';
import { Route, Routes } from "react-router";
import { routesConfig } from "../config/routesConfig";
import { Loader } from "shared/components";
import { Context } from "app/providers/ContextProvider";

const AppRouter = () => {
    const { onResize } = useContext(Context);
    let timeout: NodeJS.Timeout = null;
    const element = document.querySelector('#header');

    const listener = () => {
        if(timeout)
            clearTimeout(timeout);

        timeout = setTimeout(() => {
            const screenWidth = window.innerWidth;
            const widthWithoutScroll = element?.clientWidth;
            onResize(screenWidth, widthWithoutScroll || screenWidth);
        }, 1000);
    };

    useEffect(() => {
        window.addEventListener('resize', listener);
        return () => {
            removeEventListener('resize', listener);
        }
    }, [element]);

    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                { routesConfig.map(({ path, element }) =>
                    <Route path={path} element={element} />
                )}
            </Routes>
        </Suspense>

    );
};

export default AppRouter;