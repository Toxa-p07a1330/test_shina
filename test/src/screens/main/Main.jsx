import {observer} from "mobx-react-lite";
import {BOOT_STATES, contactsStore} from "../../store/contactsStore";
import {ContactsWrapper} from "./components/contacts-wrapper/ContactsWrapper";
import {MyMap} from "./components/map/MyMap";
import style from "./style.module.scss"

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
    return <div className={style.wrapper}>
        <ContactsWrapper/>
        <MyMap/>
    </div>
})
export {Main}