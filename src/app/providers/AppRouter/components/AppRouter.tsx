import React, { Suspense } from 'react';
import { Route, Routes } from "react-router";
import { routesConfig } from "../config/routesConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                { routesConfig.map(({ path, element }) =>
                    <Route path={path} element={element} />
                )}
            </Routes>
        </Suspense>

    );
};

export default AppRouter;