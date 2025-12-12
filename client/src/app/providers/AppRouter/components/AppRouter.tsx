import React, { Suspense } from 'react';
import { Route, Routes } from "react-router";
import { routesConfig } from "../config/routesConfig";
import { Loader } from "shared/components";

const AppRouter = () => {
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