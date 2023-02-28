import * as dotenv from "dotenv";
import path from 'path';
import express from 'express';
import { json } from 'body-parser';

// import { connectToDatabase } from "./database/connect";
// import { tennisClubRouter } from './routes/tennisclubs.router';

// load environment variables
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const PORT = process.env.PORT;

const app = express();
app.use(json());
// app.use(tennisClubRouter);

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) });