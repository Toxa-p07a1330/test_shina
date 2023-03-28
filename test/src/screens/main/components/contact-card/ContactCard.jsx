import {contactsStore} from "../../../../store/contactsStore";
import {observer} from "mobx-react-lite";
import classnames from 'classnames'
import style from "./style.module.scss"
const ContactCard = observer(({pickPoint}) => {
    const isActive = JSON.stringify(pickPoint) === JSON.stringify(contactsStore.selectedStore)
    return <div onClick={() => {
        contactsStore.setSelectedStore(pickPoint)
    }} className={classnames(style.wrapper, style.active)}>
    </div>
})
export {ContactCard}