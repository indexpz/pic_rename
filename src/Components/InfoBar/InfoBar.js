import React from 'react'
import './InfoBar.css'


export default function InfoBar({image, dimensions}) {

    const imageName = image.name
    const imageWeight = (image.size / 1000 / 1000).toFixed(2)

function imageNewName(filename) {
        const extension = (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined
   return  `${imageName.split("."+extension)[0]}_${dimensions.width}x${dimensions.height}px.${extension}`




}

// console.log(imageNewName(imageName));

    return (
        <div className="info-bar--container">
            <p>Nazwa: {imageName}</p>
            <p>Wielkość: {imageWeight} MB</p>
            <p>Szerokość: {dimensions.width}px</p>
            <p>Wysokość: {dimensions.height}px</p>
            <p>Nowa nazwa: {imageNewName(imageName)}</p>
        </div>
    )
}