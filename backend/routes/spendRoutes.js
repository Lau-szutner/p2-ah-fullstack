import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getSpend, createSpend } from '../controllers/spendController.js';

const router = express.Router();

router.get('/', protect, getSpend);
router.post('/', protect, createSpend);

export default router;
