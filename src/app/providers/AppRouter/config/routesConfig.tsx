import { Navigate, RouteProps } from "react-router";
import { HomePage } from "pages/HomePage";
import { FaqPage } from "pages/FaqPage";
import { LocationsPage } from "pages/LocationsPage";
import { ContactsPage } from "pages/ContactsPage";

export enum RoutePaths {
    HOME = '/',
    FAQ = '/faq',
    LOCATIONS = '/locations',
    CONTACTS = '/contacts',
    NO_MATCH = '*',
}

export const routesConfig: Array<RouteProps> = [
    { path: RoutePaths.HOME, element: <HomePage/> },
    { path: RoutePaths.FAQ, element: <FaqPage/> },
    { path: RoutePaths.LOCATIONS, element: <LocationsPage/> },
    { path: RoutePaths.CONTACTS, element: <ContactsPage/> },
    { path: RoutePaths.NO_MATCH, element: <Navigate to="/" replace /> },
]