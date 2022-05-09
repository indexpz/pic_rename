import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from "./Components/Header/Header";
import Main from './Components/Main/Main'
import Footer from "./Components/Footer/Footer";
import Info from "./Components/Info/Info"
import Error from "./Components/Error/Error"
import './App.css'

function App() {
    return (<div className="app--container">
            <Header/>
            <Routes>
                <Route path="/picrenamer/" element={<Main/>}/>
                <Route path="/picrenamer/info/" element={<Info/>}/>
                <Route path="/*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </div>
    )

}

export default App
