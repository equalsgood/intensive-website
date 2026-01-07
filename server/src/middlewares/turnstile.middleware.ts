import { Request, Response, NextFunction } from 'express';
import { config } from '../config';

interface TurnstileResponse {
    success: boolean;
    'error-codes'?: string[];
    challenge_ts?: string;
    hostname?: string;
}

export const validateTurnstile = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { turnstileToken } = req.body;
    // 1. Check if token even exists
    if (!turnstileToken) {
        return res.status(400).json({ error: "Security token is missing." });
    }

    try {
        // 2. Verify with Cloudflare API
        const response = await fetch(
            'https://challenges.cloudflare.com/turnstile/v0/siteverify',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    secret: config.TURNSTILE!,
                    response: turnstileToken,
                    remoteip: req.ip as string,
                }),
            }
        );

        const data = await response.json() as TurnstileResponse;

        if (data.success) {
            return next();
        }

        return res.status(403).json({
            error: "Bot detection triggered. Please try again.",
            details: data['error-codes'],
        });

    } catch (error) {
        console.error('Turnstile Error:', error);
        return res.status(500).json({ error: "Internal verification error." });
    }
};