import React, {useContext} from 'react'
import Form from "../Form/Form";
import Image from '../Image/Image'
import Settings from "../Settings/Settings";
import './Main.css'
import {nanoid} from "nanoid";
import {Context} from "../../Context/Context";


export default function Main() {

    const {settings} = useContext(Context)
    const {setSettings} = useContext(Context)
    const {allImages} = useContext(Context)

    let style = (settings ? 'btn--settings header--link active' : 'btn--settings header--link')

    const imageElements = allImages.map(image =>
        <Image key={nanoid()} image={image} id={nanoid()}/>)

    const handleSettings = () => {
        setSettings(prevSetting => !prevSetting)
    }

    return (<div className='main--container'>
            <div className="main--content">
                <button className={style} onClick={handleSettings}><i className="bi bi-gear"></i> Ustawienia
                </button>
                <Form/>

                {settings && <Settings/>}
                <div>{imageElements}</div>
            </div>
        </div>
    )
}