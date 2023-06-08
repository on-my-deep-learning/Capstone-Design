import { Router } from 'express';
import resController from '../controller/resController.js';

const router = Router();

router.get('/select', resController.select);
router.get('/name', resController.name);

export default router;
