import {contactsStore} from "../../../../store/contactsStore";
import {ContactCard} from "../contact-card/ContactCard";
import {observer} from "mobx-react-lite";
import style from "./style.module.scss"

const ContactsWrapper = observer(()=>{
    return <div className={style.wrapper}>
        {contactsStore?.pickPoints?.map((point)=>{
            return <ContactCard pickPoint={point}/>
        })}
    </div>
})
export {ContactsWrapper}