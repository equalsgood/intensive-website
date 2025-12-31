import { Response, NextFunction } from 'express';
import * as TelegramService from '../services/telegram.service';
import { TypedRequest } from "../types/form.types";

export const handleFormSubmission = async (req: TypedRequest, res: Response, next: NextFunction) => {
    try {
        await TelegramService.sendNewBid(req.body);
        res.status(200).json({ success: true, message: 'New bid sent!' });
    } catch (error) {
        next(error);
    }
};