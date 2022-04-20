import React, {useContext, useEffect, useRef, useState} from 'react'
import './Image.css'
import InfoBar from "../InfoBar/InfoBar";

export default function Image({image}) {
    const objectURL = window.URL.createObjectURL(image.file)
    const [imageDimensions, setImageDimensions] = useState({width: 0, height: 0})

    function onImgLoad({target: image}) {
        // const {offsetHeight, offsetWidth} = image;
        const {naturalWidth, naturalHeight} = image;
        setImageDimensions({width: naturalWidth, height: naturalHeight})
    }

    const style = `width: ${setImageDimensions.width}; height: ${setImageDimensions.height}`

    return (
        <div className="image--container">
            <img className="image style" src={objectURL} onLoad={onImgLoad}/>
            <InfoBar image={image} dimensions={imageDimensions}/>
        </div>
    )
}