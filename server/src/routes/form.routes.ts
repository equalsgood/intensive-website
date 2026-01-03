import { Router } from 'express';
import { handleFormSubmission } from '../controllers/form.controller';
import { validate } from '../middlewares/validate.middleware';
import { BidFormSchema } from '../types/form.schema';
import { contactFormLimiter } from "../middlewares/rateLimiter.meddleware";

const router = Router();

router.post('/submit', contactFormLimiter,validate(BidFormSchema), handleFormSubmission);

export default router;