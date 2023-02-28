import * as dotenv from "dotenv";
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';

import { tennisClubRouter } from './routes/tennisclubs';

// load environment variables
const ENV_FILE_PATH = path.join(__dirname, '..', 'env');
dotenv.config({ path: ENV_FILE_PATH});
const CLIENT = process.env.DATABASE_CLIENT;
const USERNAME = process.env.DATABASE_USERNAME;
const PASSWORD = process.env.DATABASE_PASSWORD;
const HOST = process.env.DATABASE_HOST;
const CONNECTION_STRING = `${CLIENT}://${USERNAME}:${PASSWORD}@${HOST}`;

// create express middleware
const app = express();
app.use(json());
app.use(tennisClubRouter);

app.listen(3000, () => { console.log('Server is listening on port 3000') });