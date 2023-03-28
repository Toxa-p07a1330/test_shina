import {contactsStore} from "../../../../store/contactsStore";
import {observer} from "mobx-react-lite";
import classnames from 'classnames'
import style from "./style.module.scss"

const ContactCard = observer(({pickPoint}) => {
    const isActive = contactsStore.isActive(pickPoint)
    return <div onClick={() => {
        contactsStore.setSelectedStore(pickPoint)
    }} className={classnames(style.wrapper, isActive ? style.active : "")}>
        <div className={style.title}>
            {pickPoint.address}
        </div>
        <div className={style.budgets}>
            {pickPoint?.budgets?.map((budget) => {
                return <div className={style.budget}>
                    {budget}
                </div>
            })}
        </div>
    </div>
})
export {ContactCard}