import React, {useState} from 'react'
import {validFileType} from '../Helpers'
import {nanoid} from 'nanoid'

const Context = React.createContext()


function ContextProvider({children}) {
    const [image, setImage] = useState({
        id: "",
        name: "",
        path: "",
        dimensions: {
            with: "",
            height: ""
        },
        size: "",
        colorSpace: "",
        type: "",
        isNameChange: false,
    })
    const [allImages, setAllImages] = useState([])


    function createImageData(image) {
        if (validFileType(image)) {
            console.log(image);
            console.log(image.type);
            console.log(image.size / 1024);
            console.log(image.width);
            console.log(typeof image);

            console.log(image);

            let url, foldersAndFile, folders, folderpath, protocol, host, ourLocation;
            url = window.location;
            foldersAndFile = url.pathname.split("/");
            folders = foldersAndFile.slice(0, foldersAndFile.length - 1);
            folderpath = folders.join("/");
            protocol = url.protocol + "//";
            host = url.host;

            ourLocation = protocol + host + folderpath;

            console.log(url);


            setImage(prevImage => (
                {
                    id: nanoid(),
                    name: image.name,
                    path: "",
                    dimensions: {
                        with: image.naturalWidth,
                        height: image.naturalHeight,
                    },
                    size: image.size,
                    colorSpace: "",
                    type: image.type,
                    isNameChange: false

                }
            ))
        } else {
            alert(`Nie właściwy format pliku ${image.name}`);
        }

    }


    function addImage(newImage) {
        setAllImages(prevImages => [...prevImages, newImage])
    }


    // console.log(`allImages ${allImages}`);

    return (
        <Context.Provider value={{
            addImage,
            allImages,
            createImageData
        }}
        >
            {children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}