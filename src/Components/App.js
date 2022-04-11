import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from "./Header/Header";
import Main from './Main/Main'
import Footer from "./Footer";
import './App.css'

function App() {
    return (
        <div>

            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App
