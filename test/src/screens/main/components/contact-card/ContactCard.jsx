import {contactsStore} from "../../../../store/contactsStore";
import {observer} from "mobx-react-lite";

const ContactCard = observer(({pickPoint}) => {
    const isActive = JSON.stringify(pickPoint) === JSON.stringify(contactsStore.selectedStore)
    return <div onClick={() => {
        contactsStore.setSelectedStore(pickPoint)
    }}>
        {isActive && "*"}
        {JSON.stringify(pickPoint)}
    </div>
})
export {ContactCard}