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

// interface Anchor {
//     name: string;
//     link: string;
// }
//
// interface IAnchors {
//     PHONE: Anchor,
//     SECOND_PHONE: Anchor,
//     TG: Anchor,
//     VIBER: Anchor,
//     WUP: Anchor,
//     INST: Anchor,
// }
//
// export const Anchors = {
//     PHONE: { name: '+380 (68) 916 91 53', link: 'tel:+380689169153' },
//     SECOND_PHONE: { name: '+380 (96) 456 24 83', link: 'tel:+380964562483' },
//     TG: { name: '', link: '' },
//     VIBER: { name: '', link: '' },
//     WUP: { name: '', link: '' },
//     INST: { name: '', link: 'https://www.instagram.com/intensiveschool.ua' },
// }

export enum Anchors {
    PHONE = 'tel:+380964562483',
    TG = 'https://t.me/tutorartembabak',
    VIBER = '',
    WUP = '',
    INST = '',
}

export const routesConfig: Array<RouteProps> = [
    { path: RoutePaths.HOME, element: <HomePage/> },
    { path: RoutePaths.FAQ, element: <FaqPage/> },
    { path: RoutePaths.LOCATIONS, element: <LocationsPage/> },
    { path: RoutePaths.CONTACTS, element: <ContactsPage/> },
    { path: RoutePaths.NO_MATCH, element: <Navigate to="/" replace /> },
]