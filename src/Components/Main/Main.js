import React, {useContext} from 'react'
import Form from "../Form/Form";
import Image from '../Image/Image'
import './Main.css'
import {nanoid} from "nanoid";
import {Context} from "../../Context/Context";


export default function Main() {


    const {allImages} = useContext(Context)

    const imageElements = allImages.map(image =>
        <Image key={nanoid()} image={image}/>)

    return (<div className='main--container'>
            <div className="main--content">
                <Form/>
                <div>{imageElements}</div>
            </div>
        </div>
    )
}