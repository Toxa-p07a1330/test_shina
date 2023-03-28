import {observer} from "mobx-react-lite";
import {BOOT_STATES, contactsStore} from "../../store/contactsStore";

const Main = observer(() => {
    if (contactsStore.state === BOOT_STATES.NONE || contactsStore.state === BOOT_STATES.InPROGRESS)
        return <div>
            Loading...
        </div>
    if (contactsStore.state === BOOT_STATES.ERROR) {
        return <div>
            Error
        </div>
    }
    return <div>
        {JSON.stringify(contactsStore.selectedStore)}
    </div>
})
export {Main}