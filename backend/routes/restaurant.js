import { Router } from 'express';
import resController from '../controller/resController.js';

const router = Router();

router.post('/select', resController.select);

export default router;
