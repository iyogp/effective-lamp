import { MongoClient, Collection } from 'mongodb';

import loadEnv from '../utils/loadEnv';

loadEnv('../../.env'); // load environment variables
const CLIENT = process.env.DATABASE_CLIENT;
const USERNAME = process.env.DATABASE_USERNAME;
const PASSWORD = process.env.DATABASE_PASSWORD;
const HOST = process.env.DATABASE_HOST;
const DB_NAME = process.env.DATABASE_NAME;
const TENNIS_CLUBS_COLLECTION_NAME = process.env.TENNIS_CLUBS_COLLECTION_NAME;
const DB_CONN_STRING = `${CLIENT}://${USERNAME}:${PASSWORD}@${HOST}/?retryWrites=true&w=majority`;

export const collections: { tennisClubs?: Collection } = {};

/** Connect to MongoDB database */
export async function connectToDatabase() {
    const client = new MongoClient(DB_CONN_STRING);
    const db = client.db(DB_NAME);
    const tennisClubsCollection = db.collection(TENNIS_CLUBS_COLLECTION_NAME!);
    collections.tennisClubs = tennisClubsCollection;
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${tennisClubsCollection.collectionName}`);
};