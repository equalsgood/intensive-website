import React, { Suspense, useContext, useEffect } from 'react';
import { Route, Routes } from "react-router";
import { routesConfig } from "../config/routesConfig";
import { Loader } from "shared/components";
import { Context } from "app/providers/ContextProvider";

const AppRouter = () => {
    const { onResize } = useContext(Context);
    let timeout: NodeJS.Timeout = null;

    window.addEventListener('resize', () => {
        if(timeout)
            clearTimeout(timeout);

        timeout = setTimeout(() => {
            const screenWidth = window.innerWidth;
            onResize(screenWidth);
        }, 1000);
    });

    useEffect(() => {
        onResize(window.innerWidth);
    }, []);

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