import express from 'express';
import menuController from '../controller/menuController.js';

const router = express.Router();

router.get('/name', menuController.name);
router.get('/select', menuController.select);

export default router;