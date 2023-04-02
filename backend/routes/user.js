import { Router } from 'express';
import userController from '../controller/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/check', authMiddleware.checkToken, userController.check);

export default router;
