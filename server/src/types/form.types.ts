import { Request } from 'express';

export interface Bid {
    name: string;
    email: string;
    phone: string;
    desc?: string;
}

export type TypedRequest = Request<{}, {}, Bid>