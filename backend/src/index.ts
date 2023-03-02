import express from 'express';
import { json } from 'body-parser';

import loadEnv from './utils/loadEnv';
import { connectToDatabase, disconnectFromDatabase } from "./services/database.service";

// load environment variables
loadEnv('../.env');
const PORT = process.env.PORT;

connectToDatabase();
disconnectFromDatabase();

const app = express();
app.use(json());

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) });