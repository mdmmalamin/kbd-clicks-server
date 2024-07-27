import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// Parsers
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://kbdclicks.netlify.app'],
    credentials: true,
  }),
);

// Application routes
app.use('/api/v1', router);

const kbdClicks = async (req: Request, res: Response) => {
  res.send('Welcome to kbd clicks APIs!');
};

app.get('/', kbdClicks);

app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
