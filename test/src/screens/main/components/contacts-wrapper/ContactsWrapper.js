import {contactsStore} from "../../../../store/contactsStore";
import {ContactCard} from "../contact-card/ContactCard";
import {observer} from "mobx-react-lite";
const ContactsWrapper = observer(()=>{
    return <div>
        {contactsStore?.pickPoints?.map((point)=>{
            return <ContactCard pickPoint={point}/>
        })}
    </div>
})
export {ContactsWrapper}