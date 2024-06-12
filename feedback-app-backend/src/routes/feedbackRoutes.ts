import { Router } from 'express';
import { getAllFeedbacks, addFeedback } from '../controllers/feedbackController';

const router = Router();

router.get('/feedback', getAllFeedbacks);
router.post('/feedback', addFeedback);

export default router;
