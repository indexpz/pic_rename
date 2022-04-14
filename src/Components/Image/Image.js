import React from 'react'
import './Image.css'

export default function Image({image}) {
    const objectURL = window.URL.createObjectURL(image)
    return (
        <div className="image--container">
            <img  src={objectURL}/>
        </div>
    )
}