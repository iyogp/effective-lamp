import { Connection, connect, connection, disconnect } from 'mongoose';

import loadEnv from '../utils/loadEnv';

let database: Connection;

loadEnv('../../.env'); // load environment variables
const CLIENT = process.env.DATABASE_CLIENT;
const USERNAME = process.env.DATABASE_USERNAME;
const PASSWORD = process.env.DATABASE_PASSWORD;
const HOST = process.env.DATABASE_HOST;
const DB_NAME = process.env.DATABASE_NAME;
// const TENNIS_CLUBS_COLLECTION_NAME = process.env.TENNIS_CLUBS_COLLECTION_NAME;
const URI = `${CLIENT}://${USERNAME}:${PASSWORD}@${HOST}/?retryWrites=true&w=majority`;

/** Connect to MongoDB database */
export async function connectToDatabase() {
    if (database) {
        console.log("Already connnected to database")
        return;
    };
    connect(URI, { dbName: DB_NAME });
    database = connection;
    database.once("open", async () => {
        console.log(`Connected to database: ${database.name}`);
    });
    database.on("error", () => {
        console.log("Error connecting to database");
    });
};

export async function disconnectFromDatabase() {
    if (!database) {
        console.log("Not connected to a database");
        return;
    };
    disconnect();
    console.log("Disconnected from database");
};