import React, {useContext, useState} from 'react'
import {Context} from '../../Context/Context'
// import Jimp from 'jimp'
// import {sizeOf} from 'image-size'
import './Form.css'


export default function Form() {

    // const Jimp = require('jimp')
    //
    // Jimp.read("../../Images/_IMG_8489.jpeg")
    //     .then(img => console.log(img))
    //     .catch(err=> console.log(err))
    // const sizeOf = require('../../Images/_IMG_8489.jpeg')
    // const dimensions = sizeOf('images/funny-cats.png')
    // console.log(dimensions.width, dimensions.height)


    const {createImageData} = useContext(Context)

    function handleDropFiles(event) {
        preventDefaults(event)
        const files = event.target.files
        const file = event.target.value
        console.log(files);
        console.log(file);
        handleFiles(files)

    }

    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }

    function handleFiles(files) {
        ([...files].forEach(file => {
                // console.log(file)
                // console.log(file.getAttribute());

                createImageData(file)
            }
        ))

    }

    return (
        <form className="form--drop-area">
            <input type="file" id="file-input" name="file-input" multiple
                   accept="image/png, image/jpeg, image/jpg"
                   onChange={handleDropFiles}/>
        </form>
    )
}