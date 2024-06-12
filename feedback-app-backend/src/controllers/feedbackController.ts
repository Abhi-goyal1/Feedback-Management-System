import { Request, Response } from 'express';
import { FeedbackService } from '../services/feedbackService';

const feedbackService = new FeedbackService();

export const getAllFeedbacks = (req: Request, res: Response) => {
  const feedbacks = feedbackService.getAllFeedbacks();
  res.json(feedbacks);
};

export const addFeedback = (req: Request, res: Response) => {
  const { name, feedback } = req.body;
  const newFeedback = feedbackService.addFeedback(name, feedback);
  res.status(201).json(newFeedback);
};
