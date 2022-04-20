import React, {useState} from 'react'
import {preventDefaults, validFileType} from '../Helpers'
import {nanoid} from 'nanoid'

const Context = React.createContext()

function ContextProvider({children}) {

    const [allImages, setAllImages] = useState([])

    function addImage(image) {
        const objImg = {
            file: image,
            id: nanoid(),
            name: image.name,
        }
        setAllImages(prevImages => [...prevImages, objImg])
    }


    function removeImage(id) {
        setAllImages(prevItems => prevItems.filter(image => image.id !== id))
    }

    // console.log(allImages);

    return (
        <Context.Provider value={{
            addImage,
            allImages,
            removeImage
        }}
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}