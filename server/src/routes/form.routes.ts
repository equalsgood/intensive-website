import { Router } from 'express';
import { handleFormSubmission } from '../controllers/form.controller';
import { validate } from '../middlewares/validate.middleware';
import { BidFormSchema } from '../types/form.schema';

const router = Router();

router.post('/submit', validate(BidFormSchema), handleFormSubmission);

export default router;