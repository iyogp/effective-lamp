import { connect, disconnect } from 'mongoose';

import loadEnv from '../utils/loadEnv';

loadEnv('../../.env');
const env = process.env;
const URI = `${env.DB_CLIENT}://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/${env.DB_NAME}?retryWrites=true&w=majority`;

/** Connect to MongoDB database */
export async function connectToDatabase() {
    connect(URI)
        .then(() => {
            console.log(`Connected to database`);
        })
        .catch(() => {
            console.log(`Error connecting to database`);
        });
};

/** Disconnect from MongoDB database */
export async function disconnectFromDatabase() {
    disconnect()
        .then(() => {
            console.log(`Disconnected from database`);
        })
        .catch(() => {
            console.log(`Unable to disconnect from database`);
        });
};