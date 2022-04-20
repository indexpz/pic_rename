import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context/Context";
import './index.css'
import React from "react";

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
    <>
        <ContextProvider>
            <Router>
                <App/>
            </Router>
        </ContextProvider>
    </>
)



