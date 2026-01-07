import { Bid } from "./types";
import axios from "axios";

export const createBid = async (bid: Bid) => {
    try {
        return await axios.post(`${process.env.API}/api/form/submit`, {
            ...bid
        })
    } catch (e) {
        return e;
    }
}
