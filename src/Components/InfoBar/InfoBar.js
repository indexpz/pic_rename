import React, {useContext} from 'react'
import './InfoBar.css'
import {Context} from "../../Context/Context";
import {saveAs} from 'file-saver';
import {preventDefaults} from "../../Helpers";


export default function InfoBar({image, dimensions}) {

    const {removeImage} = useContext(Context)

    const imageName = image.name
    const imageWeight = (image.file.size / 1000 / 1000).toFixed(2)

    function imageNewName(filename) {
        const extension = (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined
        return `${imageName.split("." + extension)[0]}_${dimensions.width}x${dimensions.height}px.${extension}`
    }

    function handleSave(event, id) {
        event.preventDefault()
        saveAs(image.file, imageNewName(imageName))
        removeImage(id)
    }

    function handleRemove(event, id){
        event.preventDefault()
        removeImage(id)
    }

    return (
        <div className="info-bar--container">
            <p className="info-bar--name" >Nazwa: {imageName}</p>
            <p className="info-bar--size" >Wielkość: {imageWeight < 1 ? `${imageWeight * 1000} kb` :  `${imageWeight} MB`}</p>
            <p className="info-bar--width" >Szerokość: {dimensions.width} px</p>
            <p className="info-bar--height" >Wysokość: {dimensions.height} px</p>
            <p className="info-bar--new-name" >Nowa nazwa: <span>{imageNewName(imageName)}</span></p>
            <button  className="btn" onClick={(e) => handleSave(e, image.id)}>Zapisz</button>
            <button  className="btn info-bar--delete" onClick={(e) => handleRemove(e, image.id)}>Usuń</button>
        </div>
    )
}