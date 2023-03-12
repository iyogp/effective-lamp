import Address from "./address";
import Court from "./court";
import Contact from "./contact";

export default interface ITennisClub {
    club: string;
    type: string;
    address: Address;
    courts: Array<Court>;
    contacts: Array<Contact>;
}