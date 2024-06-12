import React, { useState } from 'react';
import { addFeedback } from '../services/api';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addFeedback(name, feedback);
    setName('');
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Feedback:</label>
        <input value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
