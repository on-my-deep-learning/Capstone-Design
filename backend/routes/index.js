import { Router } from 'express';
import userRouter from './user.js';
import resRouter from './restaurant.js';

const router = Router();

router.use('/users', userRouter);
router.use('/restaurant', resRouter);

export default router;
