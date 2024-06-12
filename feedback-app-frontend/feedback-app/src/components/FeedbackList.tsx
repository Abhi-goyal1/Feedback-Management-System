import React, { useEffect, useState } from 'react';
import { getFeedbacks } from '../services/api';

interface Feedback {
  id: number;
  name: string;
  feedback: string;
}

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const data = await getFeedbacks();
      setFeedbacks(data);
    };
    fetchFeedbacks();
  }, []);

  return (
    <div>
      {feedbacks.map((feedback) => (
        <div key={feedback.id}>
          <p><strong>{feedback.name}</strong>: {feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
