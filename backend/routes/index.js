import { Router } from 'express';
import userRouter from './user.js';
import resRouter from './restaurant.js';
import menuRouter from './menu.js';

const router = Router();

router.use('/users', userRouter);
router.use('/restaurant', resRouter);
router.use('/menu', menuRouter);

export default router;
