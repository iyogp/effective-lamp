import { Schema, model } from "mongoose";
import ICourt from "../interfaces/court"; 
import IContact from "../interfaces/contact";
import loadEnv from "../utils/loadEnv.util";

loadEnv('../../.env');

var tennisClubSchema = new Schema(
    {
        club: { type: String, required: true },
        type: { type: String, required: true },
        address: { type: Object, required: true },
        courts: { type: Array<ICourt>, required: true },
        contacts: { type: Array<IContact>, required: true }
    },
    { collection: '_tennisclubs' }
)

const TennisClubs = model(process.env.DB_COLLECTION!, tennisClubSchema);

export default TennisClubs;