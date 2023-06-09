import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';
import style from "./style.module.scss"
import {contactsStore} from "../../../../store/contactsStore";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

const MyMap = observer(() => {

    const state = {
        center: [contactsStore.selectedStore.latitude, contactsStore.selectedStore.longitude],
        zoom: 14,
    };
    return <div>
        <YMaps>
            <div className={style.wrapper}>
                <YMaps>
                    <Map state={state} style={{
                        width: 700,
                        height: 700
                    }}>
                        <Placemark geometry={state.center}/>
                    </Map>
                </YMaps>
            </div>
        </YMaps>
    </div>
})
export {MyMap}