import React, {useContext} from 'react'
import './Settings.css'
import {Context} from "../../Context/Context";

export default function Settings() {

    const {imageDimensionsPosition} = useContext(Context)
    const {setImageDimensionsPosition} = useContext(Context)

    const handleSubmit = (event) => {
        event.preventDefault()
        // submitToApi(formData)
        console.log(imageDimensionsPosition);
    }

    const handleChange =(event)=>{
        const {name, value, type, checked} = event.target;
        // console.log(name, value, type, checked);
        setImageDimensionsPosition(prevPositon =>{
            return prevPositon = value
        })
    }

    return (
        <div className="settings--container">
            <form onSubmit={handleSubmit}>
                <label htmlFor='imageDimPos'>Dodaj wymiary </label>

                <select
                    id='imageDimPos'
                    value={imageDimensionsPosition}
                    onChange={handleChange}
                    name='imageDimPos'>
                    {/*<option value="">-- Choose --</option>*/}
                    <option value="end">na końcu nazwy pliku</option>
                    <option value="front">na początku nazwy pliku</option>
                </select>

                {/*<input*/}
                {/*    type='text'*/}
                {/*    onChange={handleChange}*/}
                {/*    name='firstName'*/}
                {/*    value={}*/}
                {/*/>*/}


            </form>
        </div>
    )
}