import { Navigate, RouteProps } from "react-router";
import { HomePage } from "../../../../pages/HomePage";
import { PricingPage } from "../../../../pages/PricingPage";

enum RoutePaths {
    HOME = '/',
    PRICING = '/pricing',
    NO_MATCH = '*',
}

export const routesConfig: Array<RouteProps> = [
    { path: RoutePaths.HOME, element: <HomePage/> },
    { path: RoutePaths.PRICING, element: <PricingPage/> },
    { path: RoutePaths.NO_MATCH, element: <Navigate to="/" replace /> },
]