import { Bid } from "./types";
import axios from "axios";

export const createBid = async (bid: Bid) => {
    try {
        return await axios.post('http://localhost:5000/api/form/submit', {
            ...bid
        })
    } catch (e) {
        return e;
    }
}
