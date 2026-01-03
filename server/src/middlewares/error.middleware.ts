import { Request, Response, NextFunction } from 'express';
import { config } from '../config'

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error',
        // Only show stack trace in development mode
        stack: config.MODE === 'development' ? err.stack : undefined,
    });
};