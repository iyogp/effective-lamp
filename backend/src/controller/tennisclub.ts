import IAddress from "../interfaces/address";
import ICourt from "../interfaces/court";
import IContact from "../interfaces/contact";
import ITennisClub from "../interfaces/tennisclub";

export default class TennisClub {

    club: string;
    type: string;
    address: IAddress;
    courts: Array<ICourt>;
    contacts: Array<IContact>;

    constructor(tennisClub: ITennisClub) {
        const { club, type, address, courts, contacts } = tennisClub;
        this.club = club;
        this.type = type;
        this.address = address;
        this.courts = courts;
        this.contacts = contacts;
    }

}