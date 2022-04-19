import React, {useState, useEffect} from 'react'
import './Image.css'
import InfoBar from "../InfoBar/InfoBar";

export default function Image({image}) {
    const objectURL = window.URL.createObjectURL(image)

    const [imageDimensions, setImageDimension] = useState({
        width: 0,
        height: 0
    })
    // const [dimensions, setDimensions] = useState({
    //     height: window.innerHeight,
    //     width: window.innerWidth
    // })

    // const [newImage, setNewImage] = useState({
    //     obj: {},
    //     name: "",
    //     width: 0,
    //     height: 0,
    //     actualWidth: 0,
    //     actualHeight: 0,
    //     scale: 0,
    //     size: 0,
    //     url: ""
    // })

    const onImgLoad = ({target: image}) => {
        const {offsetHeight, offsetWidth} = image;
        const {naturalWidth, naturalHeight} = image;
        // console.log(offsetHeight, offsetWidth);
        // console.log(naturalWidth, naturalHeight);
        setImageDimension(state=>({width: naturalWidth, height: naturalHeight}))
    };


    // Img.onload = revokeURL;   // add onload handler before src
    // Img.src = objectURL;

    function revokeURL() {
        URL.revokeObjectURL(this.src);     // remove URL reference
    }



 // useEffect(() => {
 //
 //        function handleResize({target: image}) {
 //            const {offsetHeight, offsetWidth} = image;
 //            setDimensions({
 //                height: window.innerHeight,
 //                width: window.innerWidth,
 //                // height: window.innerHeight,
 //                // width: window.innerWidth
 //            })
 //            setNewImage(prevImage => ({...prevImage,
 //                actualWidth: offsetHeight,
 //                actualHeight: offsetWidth,
 //            }))
 //        }
 //        window.addEventListener('resize', handleResize)
 //    })

    // console.log(dimensions.width, dimensions.height);
    // console.log(newImage);

    // const onImageResize = ({target: image}) => {
    //     const {offsetHeight, offsetWidth} = image;
    //     console.log(offsetHeight, offsetWidth);
    // }

    // console.log(objectURL);
    return (
        <div className="image--container">
            <img  src={objectURL} onLoad={onImgLoad}  />
            <InfoBar image={image}  dimensions={imageDimensions}/>
        </div>
    )
}