import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Feedback Management System</h1>
      <h5>Your Feedback Important For Us</h5>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default App;
