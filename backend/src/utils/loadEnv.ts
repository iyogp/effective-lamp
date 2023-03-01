import * as dotenv from "dotenv";
import path from 'path';

export default function loadEnv(pathToEnv: string) {
    dotenv.config({ path: path.join(__dirname, pathToEnv) });
};