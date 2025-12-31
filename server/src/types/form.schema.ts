import { z } from 'zod';

export const BidFormSchema = z.object({
    body: z.object({
        name: z.string().min(2, "Name is too short"),
        phone: z.string().min(2, "Phone is invalid"),
        email: z.email("Invalid email address"),
        message: z.string().max(1000, "Message too long").optional(),
    }),
});