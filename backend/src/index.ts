import express from 'express';
import { json } from 'body-parser';

import loadEnv from './utils/loadEnv';
import { connectToDatabase } from "./services/database.service";

import { tennisClubRouter } from './routes/tennisclubs.router';

loadEnv('../.env');
const PORT = process.env.PORT;

connectToDatabase();

const app = express();
app.use(json());
app.use(tennisClubRouter);

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) });