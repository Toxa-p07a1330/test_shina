import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import style from "./style.module.scss"
const MyMap = ()=>{
    const defaultState = {
        center: [55.684758, 37.738521],
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
                        <Placemark geometry={[55.684758, 37.738521]} />
                    </Map>
                </YMaps>
            </div>
        </YMaps>
    </div>
}
export {MyMap}