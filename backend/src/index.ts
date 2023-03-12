import express from 'express';
import cors from 'cors';
import Database from './controller/database';
import tennisClubRouter from './routes/tennisclubs.router';
import loadEnv from './utils/loadEnv.util';
import getDbConfig from './utils/getDbConfig.util';

loadEnv('../.env');

const PORT = process.env.PORT;

const db = new Database(getDbConfig());
db.connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());
app.use(tennisClubRouter);

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) });