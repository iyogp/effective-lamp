import { ObjectId } from "mongodb";

import Address from "./address.model";
import Court from "./court.model";
import Contact from "./contact.model";

export default interface TennisClub {
    _id?: ObjectId;
    club: string;
    type: string;
    address: Address;
    courts: Court;
    contacts: Array<Contact>;
};