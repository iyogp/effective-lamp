import { Schema, model } from "mongoose";

import Address from "./address.model";
import Court from "./court.model";
import Contact from "./contact.model";

export interface ITennisClub {
    club: string;
    type: string;
    address: Address;
    courts: Array<Court>;
    contacts: Array<Contact>;
};

export class TennisClub {

    club: string;
    type: string;
    address: Address;
    courts: Array<Court>;
    contacts: Array<Contact>;

    constructor(tennisClub: ITennisClub) {
        const { club, type, address, courts, contacts } = tennisClub;
        this.club = club;
        this.type = type;
        this.address = address;
        this.courts = courts;
        this.contacts = contacts;
    };

};

var tennisClubSchema = new Schema(
    {
        club: { type: String, required: true },
        type: { type: String, required: true },
        address: { type: Object, required: true },
        courts: { type: Array, required: true },
        contacts: { type: Array, required: true }
    },
    { collection: '_tennisclubs' }
);

export const TennisClubs = model('TennisClub', tennisClubSchema);