import * as dotenv from "dotenv";
import path from 'path';

/**
 * Loads enviroment variables from .env file.
 * @param pathToEnv path to .env file from current directory.
 */
export default function loadEnv(pathToEnv: string) {
    dotenv.config({ path: path.join(__dirname, pathToEnv) });
};