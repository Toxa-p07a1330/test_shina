import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import style from "./style.module.scss"
import {contactsStore} from "../../../../store/contactsStore";
const MyMap = ()=>{

    const defaultState = {
        center: [contactsStore.selectedStore.latitude, contactsStore.selectedStore.longitude],
        zoom: 14,
    };
    return <div>
        <YMaps>
            <div className={style.wrapper}>
                <YMaps>
                    <Map defaultState={defaultState} style={{
                        width: 500,
                        height: 500
                    }}>
                        <Placemark geometry={defaultState.center} />
                    </Map>
                </YMaps>
            </div>
        </YMaps>
    </div>
}
export {MyMap}