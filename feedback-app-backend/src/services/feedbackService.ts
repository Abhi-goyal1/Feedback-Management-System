export interface Feedback {
    id: number;
    name: string;
    feedback: string;
  }
  
  export class FeedbackService {
    private feedbacks: Feedback[] = [];
    private idCounter = 1;
  
    getAllFeedbacks(): Feedback[] {
      return this.feedbacks;
    }
  
    addFeedback(name: string, feedback: string): Feedback {
      const newFeedback = { id: this.idCounter++, name, feedback };
      this.feedbacks.push(newFeedback);
      return newFeedback;
    }
  }
  