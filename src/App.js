import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from "./Components/Header/Header";
import Main from './Components/Main/Main'
import Footer from "./Components/Footer/Footer";
import './App.css'

function App() {
    return (
        <div className="app--container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App
