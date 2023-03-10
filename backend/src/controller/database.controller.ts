import { connect, disconnect, Mongoose } from 'mongoose';

import IDbConfig from '../models/dbconfig.model';

export default class Database {

    private uri: string;
    private connection: Mongoose | null;

    constructor(dbConfig: IDbConfig) {
        this.uri = this.createUri(dbConfig);
        this.connection = null;
    }

    private createUri = (dbConfig: IDbConfig) => {
        const { client, username, password, host, name, query } = dbConfig;
        return `${client}://${username}:${password}@${host}/${name}?${query}`;
    }

    public connectToDatabase = async () => {
        try {
            if (this.connection !== null) {
                throw new Error("Already connected to database.");
            } else {
                this.connection = await connect(this.uri);
                console.log("Connected to database.");
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error("Cannot connect to database:", error.message);
            }
        }
    }

    public disconnectFromDatabase = async () => {
        try {
            if (this.connection === null) {
                throw new Error("Not connected to database.");
            } else {
                disconnect();
                this.connection = null;
                console.log("Disconnected from database.")
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error("Cannot disconnect from database:", error.message);
            }
        }
    }

}