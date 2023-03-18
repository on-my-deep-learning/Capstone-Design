import { Router } from 'express';
import userController from '../controller/userController.js';

const router = Router();

router.post('/signup', userController.signup);

export default router;
