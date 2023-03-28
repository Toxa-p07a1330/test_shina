import { makeAutoObservable } from "mobx";
const BOOT_STATES = {
    NONE: "none",
    SUCCESS: "success",
    ERROR: "error",
    InPROGRESS: "inProgress",
};

class ContactsStore{
    _data = {
        stores: [],
    };
    _state = BOOT_STATES.NONE;
    selectedStore = null;

    constructor() {
        this.getUsersFromServer();
        makeAutoObservable(this)
    }
    get state(){
        return this._state
    }
    getUsersFromServer = async () => {
        try {
            const response = await fetch("https://express-shina.ru/vacancy/geo-state");
            const json = await response.json();
            this._data.stores = json;
            this._state = BOOT_STATES.SUCCESS;
            this.selectedStore = json.pickPoints[0]
        } catch (e) {
            console.log(e);
            this._state = BOOT_STATES.ERROR;
        }
    };
}

const contactsStore = new ContactsStore();
export { contactsStore, BOOT_STATES };