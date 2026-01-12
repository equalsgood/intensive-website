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

interface Anchor {
    name: string;
    link: string;
}

interface IAnchors {
    PHONE: Anchor,
    SECOND_PHONE: Anchor,
    TG: Anchor,
    VIBER: Anchor,
    WUP: Anchor,
    INST: Anchor,
    INFO_MAIL: Anchor,
    MAP: Anchor,
}

export const Anchors: IAnchors = {
    PHONE: { name: '+380 (68) 916-91-53', link: 'tel:+380689169153' },
    SECOND_PHONE: { name: '+380 (96) 456-24-83', link: 'tel:+380964562483' },
    TG: { name: '', link: 'https://t.me/tutorartembabak' },
    VIBER: { name: '', link: 'viber://chat/?number=%2B380964562483' },
    WUP: { name: '', link: 'https://wa.me/380964562483' },
    INST: { name: '', link: 'https://www.instagram.com/intensiveschool.ua' },
    INFO_MAIL: { name: 'info@intensiveschool.com.ua', link: 'mailto:info@intensiveschool.com.ua' },
    MAP: { name: 'Перейти до карт', link: 'https://maps.app.goo.gl/wyA7tCUszJLmLM5h6' },
}


export const routesConfig: Array<RouteProps> = [
    { path: RoutePaths.HOME, element: <HomePage/> },
    { path: RoutePaths.FAQ, element: <FaqPage/> },
    { path: RoutePaths.LOCATIONS, element: <LocationsPage/> },
    { path: RoutePaths.CONTACTS, element: <ContactsPage/> },
    { path: RoutePaths.NO_MATCH, element: <Navigate to="/" replace /> },
]