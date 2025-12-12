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

export enum HomePaths {
    PROGRAMS = '/#programs',
    WHY_WE = '/#whyWe',
    TESTIMONIALS = '/#testimonials',
    TEACHERS = '/#teachers',
}

export enum Anchors {
    PHONE = 'tel:+380964562483',
    TG = 'https://t.me/tutorartembabak',
}

export const routesConfig: Array<RouteProps> = [
    { path: RoutePaths.HOME, element: <HomePage/> },
    { path: RoutePaths.FAQ, element: <FaqPage/> },
    { path: RoutePaths.LOCATIONS, element: <LocationsPage/> },
    { path: RoutePaths.CONTACTS, element: <ContactsPage/> },
    { path: RoutePaths.NO_MATCH, element: <Navigate to="/" replace /> },
]