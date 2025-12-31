import { Router } from 'express';
import formRoutes from './form.routes';

const rootRouter = Router();

// This prefixes all form routes with /form
rootRouter.use('/form', formRoutes);

export default rootRouter;