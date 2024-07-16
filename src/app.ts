import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

// Application routes
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  res.send('Welcome to kbd clicks APIs!');
};

app.get('/', test);

app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
