import React, {useContext, useState, useRef} from 'react'
import {Context} from '../../Context/Context'
import './Form.css'
import {preventDefaults, validFileType} from '../../Helpers'
import Image from "../Image/Image";

export default function Form() {
    const {addImage} = useContext(Context)
    // const fileInput = useRef()

    function dropFilesHandler(event) {
        preventDefaults(event)
        const files = event.target.files
        handleFiles(files)
    }

    function handleFiles(files) {
        [...files].forEach(file => {
            if (!validFileType(file)) {
                alert(`Plik o nazwie ${file.name} nie jest obsługiwany!`)
            } else {
                // console.log("walidacja");
                addImage(file)
            }
        })
    }


    return (
        <div className="form--drop-area">
            <form>
                <input
                    // style={{display: 'none'}}
                    type="file"
                    id="file-input"
                    name="file-input"
                    multiple
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={dropFilesHandler}
                    // onClick={dropFilesHandler}
                    // ref={fileInput}
                />
                {/*<button*/}
                {/*    className='btn-file-input'*/}
                {/*    ref={fileInput}*/}
                {/*>*/}
                {/*    Wybierz pliki jpg lub png klikając w to okno lub upuść je do tej ramki!*/}
                {/*</button>*/}

            </form>
        </div>
    )

}

