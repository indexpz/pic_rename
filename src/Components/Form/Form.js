import React, {useContext, useState} from 'react'
import {Context} from '../../Context/Context'
import './Form.css'
import {preventDefaults, validFileType} from '../../Helpers'
import Image from "../Image/Image";
import {nanoid} from 'nanoid'

export default function Form() {

    const {addImage, allImages} = useContext(Context)

    function handleDropFiles(event) {
        preventDefaults(event)
        const files = event.target.files
        // const file = event.target.value
        handleFiles(files)
    }

    function handleFiles(files) {
        [...files].forEach(file => {
            if (!validFileType(file)) {
                alert(`Plik o nazwie ${file.name} nie jest obsługiwany!`)
            } else {
                addImage(file)
            }
        })
    }

    // const imageElements = allImages.map(image =>
    //     <Image key={nanoid()} image={image}/>)

    return (
        <div className="form--drop-area">
            <form>
                <input type="file" id="file-input" name="file-input" multiple
                       accept="image/png, image/jpeg, image/jpg"
                       onChange={handleDropFiles}/>
            </form>
            {/*<button className="btn" >Dalej</button>*/}
            {/*<div>{imageElements}</div>*/}
        </div>
    )
}

