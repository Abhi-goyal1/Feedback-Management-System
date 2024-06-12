# Simple Feedback Management System

## Project Setup

### Backend

1. **Navigate to the backend directory**:
    ```sh
    cd feedback-app-backend
    ```
2. **Install dependencies**:
    ```sh
    npm install
    ```
3. **Run the server**:
    ```sh
    npm start
    ```

### Frontend

1. **Navigate to the frontend directory**:
    ```sh
    cd feedback-app
    ```
2. **Install dependencies**:
    ```sh
    npm install
    ```
3. **Run the application**:
    ```sh
    npm start
    ```

## Project Structure

### Backend

- `src/index.ts`: Entry point of the application.
- `src/controllers/feedbackController.ts`: Handles incoming requests.
- `src/services/feedbackService.ts`: Contains business logic.
- `src/routes/feedbackRoutes.ts`: Defines application routes.

### Frontend

- `src/components/FeedbackForm.tsx`: Form to submit feedback.
- `src/components/FeedbackList.tsx`: Displays feedback entries.
- `src/services/api.ts`: API calls to the backend.

## Notes

- Backend is built with Node.js, Express, and TypeScript.
- Frontend is built with React and TypeScript.
- In-memory data structure is used to store feedback.
