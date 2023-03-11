import IDbConfig from "../models/dbconfig.model";

/**
 * Create database configuration object from loading environment variables
 * @returns database configuration
 */
export default function getDbConfig(): IDbConfig {
    return {
        client: process.env.DB_CLIENT!,
        username: process.env.DB_USERNAME!,
        password: process.env.DB_PASSWORD!,
        host: process.env.DB_HOST!,
        name: process.env.DB_NAME!,
        query: process.env.DB_QUERY!
    }
}