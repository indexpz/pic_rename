import React, {useContext, useState} from 'react'
import {Context} from '../../Context/Context'
import './Form.css'
import {preventDefaults, validFileType} from '../../Helpers'

export default function Form() {

    // const Jimp = require('jimp')
    //
    // Jimp.read("../../Images/_IMG_8489.jpeg")
    //     .then(img => console.log(img))
    //     .catch(err=> console.log(err))
    // const sizeOf = require('../../Images/_IMG_8489.jpeg')
    // const dimensions = sizeOf('images/funny-cats.png')
    // console.log(dimensions.width, dimensions.height)


    const {createImageData, addImage} = useContext(Context)

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

    return (
        <form className="form--drop-area">
            <input type="file" id="file-input" name="file-input" multiple
                   accept="image/png, image/jpeg, image/jpg"
                   onChange={handleDropFiles}/>
        </form>
    )
}