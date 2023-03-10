import express from 'express';
import { json } from 'body-parser';
import Database from './controller/database.controller';
import { tennisClubRouter } from './routes/tennisclubs.router';
import loadEnv from './utils/loadEnv.util';
import { getDbConfig } from './utils/getdbconfig.util';

loadEnv('../.env');

const PORT = process.env.PORT;

const db = new Database(getDbConfig());
db.connectToDatabase();

const app = express();
app.use(json());
app.use(tennisClubRouter);

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) });