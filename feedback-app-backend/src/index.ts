import express from 'express';
import bodyParser from 'body-parser';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', feedbackRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
