import express, { RequestHandler } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
dotenv.config();

// Importing controllers makes them activated

import './controllers';
import { AppRouter } from './router';
import { establishDbConnection } from './dbconf';
const app = express();

// Configuring all middleware

app.options('*', cors() as RequestHandler);
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(AppRouter.Get());

establishDbConnection();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('running api on', PORT));
